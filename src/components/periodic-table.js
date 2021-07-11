import React from 'react'
import data from './PeriodicTableJSON.json';
import './styles.css';

const colorMap = {
    "noble gas": "#FFBC42",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "alkali metal": "#8F2D56",
    "transition metal": "#EEEBDD",
    "post-transition metal": "#218380",
    "lanthanide": "#4AABAF",
    "metalloid": "#73D2DE",
    "actinide": "#17EED8",
    "polyatomic nonmetal": "#00FE00",
    "unknown": "#7C83FD",
};

const pattern = /unknown/;

export default function PeriodicTable() {
    return (
        <>
            <div className="periodic-table text-warning justify-content-center">
                {data.elements.map(element => (
                    pattern.test(element.category) ?
                        <button className="position-relative element m-1 p-2 text-warning"
                            key={element.name}
                            style={{ gridColumn: element.xpos, gridRow: element.ypos, borderColor: colorMap["unknown"], boxShadow: "3.5px 3.5px 1.5px" + colorMap["unknown"], }}>
                            <div className="small-font position-absolute top-0 start-0 ps-1" style={{color: colorMap["unknown"]}}>{element.number}</div>
                            <div className="smaller-font position-absolute bottom-0 start-50 translate-middle-x" style={{color: colorMap["unknown"]}}>{element.name}</div>
                            {element.symbol}
                        </button>
                        :
                        <button className="position-relative element m-1 p-2 text-warning"
                            key={element.name}
                            style={{ gridColumn: element.xpos, gridRow: element.ypos, borderColor: colorMap[element.category], boxShadow: "3.5px 3.5px 1.5px" + colorMap[element.category], }}>
                            <div className="small-font position-absolute top-0 start-0 ps-1" style={{color: colorMap[element.category]}}>{element.number}</div>
                            <div className="smaller-font position-absolute bottom-0 start-50 translate-middle-x" style={{color: colorMap[element.category]}}>{element.name}</div>
                            {element.symbol}
                        </button>

                ))}
            </div>
            <div className="border border-dark m-3 p-5">
                {
                    Object.keys(colorMap).map(item => (
                        <div className="row row-cols-4">
                            <div className="col" key={item}>
                                <span className="color-dot" style={{ backgroundColor: colorMap[item], boxShadow: "1px 1px 1.5px" + colorMap[item] }}></span><span className="text-muted text-capitalize"> {item}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
