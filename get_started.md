##### 如何创建一个React组件

```react
Example_two.js

import React from 'react';
import BigBox from '@/plugins/NewDemo/BigBox'

export default function ExampleComment(props){
    const comment={
        imgUrl:"https://img.36krcdn.com/20201224/v2_0859a3ca4ddb49b4b8ff878270f07942_img_png",
        text:{
            title:"不要对地产股心存幻想#36氪未来君#",
            theText:"过去一个月，资本市场发生了一个非常奇特的现象。大家买了很长时间的茅台、科技等股票的觉得估值太高了，要买低估值的股票，因此开始买地产买银行的股票。于是很多人就赔钱了。        大家都会觉得很疑惑：为什么银行地产股在估值这么低的情况下，价格增长的持续性会如此之差。银行地产到底是不是真正的低估值？ 其实背后的原因是，银行和地产代表了人类历史上最严重的产能过剩。",
        },
        time:"2020-12-25 10:53",
        adType:"商业哲学",
    }
    return (
        <BigBox {...comment}/>
    )
}

BigBox.js

import React from 'react';
import ImageAnimation from '@/plugins/NewDemo/ImageAnimation'
import TextContent from '@/plugins/NewDemo/TextContent'
import FootContent from '@/plugins/NewDemo/FootContent'
require('./Example_two.less')

export default function BigBox(props){
    return (
        <div className="BigBox">
            <ImageAnimation imgUrl={props.imgUrl}/>
            <TextContent text={props.text}/>
            <FootContent time={props}/>
        </div>)
}

ImageAnimation.js

import React from 'react';

export default function ImageAnimation(props){
    const { imgUrl }=props;
    return(
    <div className="ExampleImage">
        <img className="theImage"
            src={imgUrl}
        />
    </div>)
}

TextContent.js

import React from 'react';
import Title from '@/plugins/NewDemo/Title';
import TheText from '@/plugins/NewDemo/TheText'

export default function TextContent(props){
    const {text}=props;
    return (
        <div className="TextContent">
            <Title text={text}/>
            <TheText text={text}/>
        </div>
    )
}

FootContent.js

import React from 'react';

export default function FootContent(props){
    const {time}=props;
    return (
        <div className="ExampleTime">
            <div className="theType">{time.adType}</div>
            <div className="theTime">{time.time}</div>
        </div>
    )
}

Title.js

import React from 'react';

export default function Title(props){
    const {text}=props;
    return(
        <div className="ExampleTitle">
            {text.title}
        </div>
    )
}

TheText.js

import React from 'react';

export default function Title(props){
    const {text}=props;
    return(
            <div className="ExampleText">
                {text.theText}
            </div>
    )
}
```

##### 如何创建一个React组件  `with less`
```react

Example_two.less

.BigBox{
    border:0.2em solid #ccc;
    margin: 0px 0 0 15px;
    width: 350px;
    padding: 15px;
    overflow: hidden;
}
.ExampleImage{
    overflow: hidden;
}
.BigBox .theImage{
    width: 100%;
}
img .theImage{
    overflow: hidden;

}
.TextContent{
    overflow: hidden;
}
.ExampleTitle{
    padding-top: 12px;
    text-align: center;
    font-size: 15px;
}
.ExampleText{
    padding-top: 15px;
    font-size: 12px;
	display:-webkit-box;
	-webkit-line-clamp:2;
	-webkit-box-orient:vertical;
    overflow: hidden;  //隐藏多余行数
}
.ExampleTime{
    padding-top: 15px;
}
.ExampleTime .theType{
    float:left;
}
.ExampleTime .theTime{
    float:right;
}
.theImage:hover{
    transform: scale(1.25);
    display:inline;
    transition: all 2s ease 0s;
}
```

##### 如何修饰一个组件
