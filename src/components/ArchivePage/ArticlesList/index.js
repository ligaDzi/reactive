import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'
import { Flipper, Flipped } from 'react-flip-toolkit'

import { closeArticle, selectArticle, leaveCursor } from '../../../AC'
import { filtreatedArticleSelector } from '../../../selectors'
import utilsDecor from '../../../decorators/utils'
import history from '../../../history'

import ArticleCard from '../ArticleCard'
import OpenArticle from '../../Articles/OpenArticle'
import NextOpenArticle from '../../Articles/NextOpenArticle'

import './style.sass'

const ArticlesList = ({ articles, archivePgRef, artFocus, artNext, closeArticle, selectArticle, leaveCursor, getUniqId, isMenuActive, isCatMenuActive }) => {

    
    const archivePgListRef = useRef();
    const [posXArtFlagState, setPosXArtFlagState] = useState();
    const [scrolLeftMSState, setScrolLeftMSState] = useState({first: 0, second: 0, third: 0, fourth: 0, fifth: 0});
    const [animaSliderState, setAnimaSliderState] = useState();
    const [isWheelState, setIsWheelState] = useState(false);
    const [wheelTimeoutState, setWheelTimeoutState] = useState();

    let isOneWheel = true;



    
    useEffect(() => { 
                       
        archivePgRef.current.onscroll = () => {  

            const { scrollLeft } = archivePgListRef.current;

            // Обнуление положений "блоков с ускорением" перед самым обнулением скролов,
            // сделанно что бы убрать мерцание этих блоков.
            if(scrollLeft > posXArtFlagState - 50) {                
                setOffsetArtCard(0);
            }
            
            if(scrollLeft < posXArtFlagState - 40) {
                archivePgListRef.current.scrollLeft = archivePgRef.current.scrollTop;  
                setOffsetArtCard(archivePgRef.current.scrollTop);             
            } else {
                archivePgListRef.current.scrollLeft = archivePgRef.current.scrollTop = 0;
            }
        }
    });

    useEffect(() => {        
        let timeout;

        if(artFocus.id) return;
        
        if((isCatMenuActive || isMenuActive) && animaSliderState) {

            clearInterval(animaSliderState);

        } else if(!isCatMenuActive && !isMenuActive) {

            timeout = setTimeout(() => {                 
                setAnimaSliderState(runAnimaSlider());              
                setListnerScroll();
            }, 1000);

        }
        return () => {
            clearTimeout(timeout);
            clearInterval(animaSliderState);
        }
    }, [isCatMenuActive, isMenuActive]);

    useEffect(() => {
        
        if(isWheelState){
            timeoutAnimaSlider();
        }
        return () => clearTimeout(wheelTimeoutState);
        
    }, [isWheelState]);

    useEffect(() => {
        if(artFocus.id && wheelTimeoutState){
            clearTimeout(wheelTimeoutState)
        }
    }, [artFocus]);



    const runAnimaSlider = () => {
        return setInterval(() => {
            if(!archivePgListRef.current) return null;
            
            const { offsetWidth, scrollLeft, scrollWidth } = archivePgListRef.current;
            let scrollList = offsetWidth + scrollLeft + 430;
                        
            if(scrollList < scrollWidth) {
                archivePgRef.current.scrollTop++;             
            } else {
                archivePgRef.current.scrollTop = 0;
            }
            
        }, 10);
    }
    
    const setListnerScroll = () => {       

        archivePgListRef.current.addEventListener('wheel', function(){  
            setIsWheelState(true);
        });
    }

    const timeoutAnimaSlider = () => {
        
        if(animaSliderState) {            
            clearInterval(animaSliderState);
        }
            
        if(isOneWheel) {
            const timeout = setTimeout(() => {
                /**
                 * Эта проверка нужна для пердотвращения утечки памяти.
                 * При скроле останавливается анимация и через 5 секунд снова запускается,
                 * если в эти 5 секунд перейти на другую страницу то анимация все равно запуститься 
                 * и очистка интервала и таймера в useEffect() не поможет.
                 */
                if(history.location.pathname === '/archive'){
                    setAnimaSliderState(runAnimaSlider());
    
                    isOneWheel = true;
                    setIsWheelState(false);
                }
            }, 5000);
            setWheelTimeoutState(timeout);
        }
        isOneWheel = false;
    }

    const setOffsetArtCard = scrollTop => {
        const offsets = {
            first: scrollTop * 0.1, 
            second: scrollTop * 0.2, 
            third: scrollTop * 0.3, 
            fourth: scrollTop * 0.4, 
            fifth: scrollTop * 0.5
        }

        setScrolLeftMSState(offsets);
    }
    
    const setPositionArtFlag = x => {
        setPosXArtFlagState(x);
    }

    const handleOpenArt = id => {  
        archivePgRef.current.scrollTop = 0;                
        clearInterval(animaSliderState);
        selectArticle(id);
    }
    const handleCloseArt = () => {
        closeArticle();
        setTimeout(() => {
            setAnimaSliderState(runAnimaSlider());
            setIsWheelState(false);
        }, 500);
    }

    // Первые 7 статей должны быть и последними семью статьями, для эффекта бесканечной прокрутки.
    const showArtList = articles.concat(articles.slice(0, 7)); 
    const renderArtList = () => {
        const { classList, styleList } = getArtClassAndStyleLists(showArtList);
        
        
        return showArtList.map((article, i, arr) => { 

            const articleNext = artNext.id ? artNext : false;

            if(i < arr.length - 7){
                if(artFocus.id === article.id){
                    return  <OpenArticle 
                                key = {article.id} 
                                article = {article} 
                                closeArticle = {handleCloseArt}
                                artNext = {articleNext}
                                openArticle = {selectArticle}
                                leaveCursor = {leaveCursor}
                            />
                } 
                if(artNext.id === article.id){
                    return <NextOpenArticle 
                                key = {article.id}
                                article = {article}
                            />
                }
            }

            if(i == arr.length - 7){
                // Этот блок будет играть роль флага, по его положению на страницы определяется когда scrollTop нужно присвоить ноль.
                return <ArticleCard 
                            key={`${article.id}_repeat2`} 
                            article={article}
                            artClass={classList[i]} 
                            artStyle={styleList[i]} 
                            isArtFlagRef={true} 
                            archivePgRef={archivePgRef}
                            setPositionArtFlag={setPositionArtFlag} 
                            openArticle = {handleOpenArt}
                            leaveCursor = {leaveCursor}
                        />                
            }            
            return <ArticleCard 
                        key={getKeyArtCard(i, arr.length, article.id)} 
                        article={article} 
                        artClass={classList[i]} 
                        artStyle={styleList[i]} 
                        isArtFlagRef={false} 
                        openArticle = {handleOpenArt}
                        leaveCursor = {leaveCursor}
                    />
        });        
    }

    const getKeyArtCard = (i, arrLength, id) => {
        if(i < arrLength - 7){
            return id;
        } else {
            return `${id}_repeat`;
        }
    }

    const getArtClassAndStyleLists = list => {
        let p = 0,
            j = 0,
            x = 0,
            listLength = list.length - 7,
            artClass,
            artStyle,
            artClassStyle = {
                classList: [],                
                styleList: []                
            }       

        for(let i=0; i < list.length; i++){            
            if(i < listLength) {
                if(j == 7) {
                    j = 0;
                    p++;
                } 
                artClass = `ap-ac-c__${j}`;
                artStyle = getArtStyleByPosition(j, p);
                j++;
            } else {
                artClass = `ap-ac-c__${x}`;
                artStyle = getArtStyleByPosition(x, p + 0.6, true);
                x++;
            }
            artClassStyle.classList.push(artClass);
            artClassStyle.styleList.push(artStyle);
        }
        return artClassStyle;
    }

    const getArtStyleByPosition = (serialNum, columNum, isLast7 = false) => {
        switch (serialNum) {
            case 0:
                return {
                    left: `${(100 * columNum)}%`
                } 
            case 1:
                if(isLast7) {
                    return {
                        left: `${(100 * columNum) + 10}%`
                    } 
                } else {
                    return {
                        left: `${(100 * columNum) + 10}%`,
                        transform: `translate3d(-${scrolLeftMSState.first}px, 0px, 0px)`
                    } 
                }
            case 2:
                if(isLast7) {
                    return {
                        left: `${(100 * columNum) + 20}%`
                    } 
                } else {
                    return {
                        left: `${(100 * columNum) + 20}%`,
                        transform: `translate3d(-${scrolLeftMSState.second}px, 0px, 0px)`
                    } 
                }
            case 3:
                return {
                    left: `${(100 * columNum) + 25}%`
                }
            case 4:
                if(isLast7) {
                    return {
                        left: `${(100 * columNum) + 57}%`
                    } 
                } else {
                    return {
                        left: `${(100 * columNum) + 57}%`,
                        transform: `translate3d(-${scrolLeftMSState.third}px, 0px, 0px)`
                    } 
                }
            case 5:
                if(isLast7) {
                    return {
                        left: `${(100 * columNum) + 75}%`
                    } 
                } else {
                    return {
                        left: `${(100 * columNum) + 75}%`,
                        transform: `translate3d(-${scrolLeftMSState.fifth}px, -50%, 0px)`
                    } 
                }                
            case 6:
                if(isLast7) {
                    return {
                        left: `${(100 * columNum) + 76}%`
                    } 
                } else {
                    return {
                        left: `${(100 * columNum) + 76}%`,
                        transform: `translate3d(-${scrolLeftMSState.second}px, 0px, 0px)`
                    } 
                }
        }
    }

    return (

        <div className='archivePage-list'>
            <CSSTransitionGroup
                transitionName = 'ap-list__anima'
                transitionAppear
                transitionAppearTimeout = {650}
                transitionEnterTimeout = {100}
                transitionLeaveTimeout = {100}
                component = 'div'
            >
                <Flipper flipKey={artFocus.id} className='ap-list__anima'>
                    <div className='ap-list__anima'>
                        <div className='archivePage-list__wrap' ref={archivePgListRef}> 
                                
                                { renderArtList() }

                            <div className='archivePage-articleCard__width'></div>
                        </div>
                    </div>
                </Flipper>
            </CSSTransitionGroup>            
        </div>

    )
}

ArticlesList.propTypes = {
    //From Store
    articles: PropTypes.array,
    artFocus: PropTypes.object,
    artNext: PropTypes.object,
    closeArticle: PropTypes.func.isRequired,
    leaveCursor: PropTypes.func.isRequired,
    selectArticle: PropTypes.func.isRequired,
    isMenuActive: PropTypes.bool,
    isCatMenuActive: PropTypes.bool,
    //From component
    archivePgRef: PropTypes.object,        
    //from decorator
    getUniqId: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        articles: filtreatedArticleSelector(state),
        artFocus: state.articles.selectArticle.artFocus,
        artNext: state.articles.selectArticle.artNext,
        isCatMenuActive: state.categories.isActive,
        isMenuActive: state.menu.isActive,
    }
}

const mapToDispatch = {
    closeArticle,
    leaveCursor,
    selectArticle
}

const decorator = connect( mapStateToProps, mapToDispatch );

export default decorator( utilsDecor(ArticlesList) );