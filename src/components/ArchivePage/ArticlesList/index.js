import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'


import ArticleCard from '../ArticleCard'

import './style.sass'

const ArticlesList = ({ articles, archivePgRef }) => {

    const archivePgListRef = useRef();
    const [posXArtFlagState, setPosXArtFlagState] = useState();
    const [scrolLeftMSState, setScrolLeftMSState] = useState({first: 0, second: 0, third: 0, fourth: 0, fifth: 0});

    let animaSlider = null;
    let isOneWheel = true;

    useEffect(() => {
        const timeout = setTimeout(() => {            
            animaSlider = runAnimaSlider();
            setListnerScroll();
        }, 3000);

        return () => {
            clearInterval(animaSlider);
            clearTimeout(timeout);
        }
    }, []);
    

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

    const runAnimaSlider = () => {
        return setInterval(() => {

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
            timeoutAnimaSlider();
        });
    }

    const timeoutAnimaSlider = () => {

        if(animaSlider) clearInterval(animaSlider);
            
        if(isOneWheel) {
            setTimeout(() => {
                animaSlider = runAnimaSlider();

                isOneWheel = true;
            }, 5000);
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

    // Первые 7 статей должны быть и последними семью статьями, для эффекта бесканечной прокрутки.
    const showArtList = articles.concat(articles.slice(0, 7)); 
    const renderArtList = () => {
        const { classList, styleList } = getArtClassAndStyleLists(showArtList);        
                       
        return showArtList.map((art, i, arr) => { 
            if(i == arr.length - 7){
                // Этот блок будет играть роль флага, по его положению на страницы определяется когда scrollTop нужно присвоить ноль.
                return <ArticleCard 
                            key={art.id+i} 
                            article={art}
                            artClass={classList[i]} 
                            artStyle={styleList[i]} 
                            isArtFlagRef={true} 
                            archivePgRef={archivePgRef}
                            setPositionArtFlag={setPositionArtFlag} 
                        />                
            }            
            return <ArticleCard 
                        key={art.id+i} 
                        article={art} 
                        artClass={classList[i]} 
                        artStyle={styleList[i]} 
                        isArtFlagRef={false} 
                    />
        });
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
                artStyle = getArtStyleByPosition(x, p + 0.3, true);
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
                <div className='ap-list__anima'>
                    <div className='archivePage-list__wrap' ref={archivePgListRef}>               
                            
                            {
                                renderArtList()
                            }
                        <div className='archivePage-articleCard__width'></div>
                    </div>
                </div>
            </CSSTransitionGroup>
        </div>
    )
}

ArticlesList.propTypes = {
    //From component
    articles: PropTypes.array,
    archivePgRef: PropTypes.object,
}

export default ArticlesList;