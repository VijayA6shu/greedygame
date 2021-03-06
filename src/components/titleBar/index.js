import React from 'react';

const TitleBar = (props) => {
    return(
        <div className="title-section">
            <ul className="inline-list">
                <li>
                    <h4>{props.title}</h4>
                </li>
                <li>
                    <span className="fav-ic">
                        <svg version="1.1" width="16px" height="16px" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 475.075 475.075" xmlSpace="preserve">
                            <path fill="#fff" d="M475.075,186.573c0-7.043-5.328-11.42-15.992-13.135L315.766,152.6L251.529,22.694c-3.614-7.804-8.281-11.704-13.99-11.704
                                c-5.708,0-10.372,3.9-13.989,11.704L159.31,152.6L15.986,173.438C5.33,175.153,0,179.53,0,186.573c0,3.999,2.38,8.567,7.139,13.706
                                l103.924,101.068L86.51,444.096c-0.381,2.666-0.57,4.575-0.57,5.712c0,3.997,0.998,7.374,2.996,10.136
                                c1.997,2.766,4.993,4.142,8.992,4.142c3.428,0,7.233-1.137,11.42-3.423l128.188-67.386l128.194,67.379
                                c4,2.286,7.806,3.43,11.416,3.43c7.812,0,11.714-4.75,11.714-14.271c0-2.471-0.096-4.374-0.287-5.716l-24.551-142.744
                                l103.634-101.069C472.604,195.33,475.075,190.76,475.075,186.573z M324.619,288.5l20.551,120.2l-107.634-56.821L129.614,408.7
                                l20.843-120.2l-87.365-84.799l120.484-17.7l53.959-109.064l53.957,109.064l120.494,17.7L324.619,288.5z" />
                        </svg>
                    </span>
                </li>
                <li>Personal</li>
                <li>
                    <svg version="1.1"width="10px" height="10px"  id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 512 512" xmlSpace="preserve" className="mr-1">
                        <g>
                            <g>
                                <path fill="#fff" d="M400,188h-36.037v-82.23c0-58.322-48.449-105.77-108-105.77c-59.551,0-108,47.448-108,105.77V188H112
                                    c-33.084,0-60,26.916-60,60v204c0,33.084,26.916,60,60,60h288c33.084,0,60-26.916,60-60V248C460,214.916,433.084,188,400,188z
                                    M187.963,105.77c0-36.266,30.505-65.77,68-65.77s68,29.504,68,65.77V188h-136V105.77z M420,452c0,11.028-8.972,20-20,20H112
                                    c-11.028,0-20-8.972-20-20V248c0-11.028,8.972-20,20-20h288c11.028,0,20,8.972,20,20V452z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#fff" d="M256,286c-20.435,0-37,16.565-37,37c0,13.048,6.76,24.51,16.963,31.098V398c0,11.045,8.954,20,20,20
                                    c11.045,0,20-8.955,20-20v-43.855C286.207,347.565,293,336.08,293,323C293,302.565,276.435,286,256,286z"/>
                            </g>
                        </g>
                    </svg>
                    Private
                </li>
                <li>
                    <div className="img-list">
                        <span className="profile-img">VJ</span>
                        <span className="profile-img">SN</span>
                    </div>
                </li>
                <li>
                    <span className="transp-btn">Invite</span>
                </li>
            </ul>
        </div>
    )
}

export default TitleBar;