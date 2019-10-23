import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import ArticleCard from '../ArticleCard'

import './style.sass'

const ArticlesList = ({ articles, archivePgRef }) => {

    const archivePgListRef = useRef();
    const [posXArtFlag, setPosXArtFlag] = useState();
    

    useEffect(() => { 
                       
        archivePgRef.current.onscroll = () => {  

            const { scrollLeft } = archivePgListRef.current;
            
            if(scrollLeft < posXArtFlag - 40) {
                archivePgListRef.current.scrollLeft = archivePgRef.current.scrollTop;                
            } else {
                archivePgListRef.current.scrollLeft = archivePgRef.current.scrollTop = 0;
            }

        }
    });
    
    const setPositionArtFlag = x => {
        setPosXArtFlag(x);
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
                artStyle = getArtStyleByPosition(x, p);
                x++;
            }
            artClassStyle.classList.push(artClass);
            artClassStyle.styleList.push(artStyle);
        }
        return artClassStyle;
    }

    const getArtStyleByPosition = (serialNum, columNum) => {
        switch (serialNum) {
            case 0:
                return {
                    left: `${(100 * columNum)}%`
                }
            case 1:
                return {
                    left: `${(100 * columNum) + 10}%`
                }
            case 2:
                return {
                    left: `${(100 * columNum) + 20}%`
                }
            case 3:
                return {
                    left: `${(100 * columNum) + 25}%`
                }
            case 4:
                return {
                    left: `${(100 * columNum) + 57}%`
                }
            case 5:
                return {
                    left: `${(100 * columNum) + 75}%`
                } 
            case 6:
                return {
                    left: `${(100 * columNum) + 76}%`
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
    archivePgRef: PropTypes.object
}

export default ArticlesList;