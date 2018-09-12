import React from 'react';
import { View } from 'native-base';
import styles from './styles';
import { TouchableOpacity} from "react-native";
import Text from '../CustomText';
import Svg, {Image, G, Circle, Rect, Polygon} from 'react-native-svg';

const all_points ={
    left:{
        regions:[
            {
                label:'cranial-left-side',
                raw_points:'180,163,206,141,212,130,223,128,244,140,252,122,258,101,248,69,228,57,201,54,185,56,171,72,170,100,162,124,167,141,170,160'
            },
            {
                label:'neck-left-side',
                raw_points:'193,205,232,175,271,177,251,163,244,139,223,127,211,131,206,138,182,162,193,163,200,181,200,192'
            },
            {
                label:'shoulder-left-side',
                raw_points:'222,228,273,255,282,234,295,222,294,207,283,188,273,177,232,176,222,186'
            },
            {
                label:'arm-left-side',
                raw_points:'247,243,262,298,280,275,307,274,307,258,304,245,295,224,282,235,272,256'
            },
            {
                label:'elbow-left-side',
                raw_points:'270,319,287,294,318,303,307,275,278,275,263,297'
            },
            {
                label:'forearm-left-side',
                raw_points:'301,400,309,388,325,390,323,360,322,316,316,302,288,294,269,323'
            },
            {
                label:'wrist-left-side',
                raw_points:'304,410,332,401,327,388,312,388,300,401'
            },
            {
                label:'hand-left-side',
                raw_points:'303,411,332,402,350,436,353,471,335,479,320,472,314,431'
            },
            {
                label:'thumb-left-side',
                raw_points:'316,408,328,407,329,439,315,440'
            },
            {
                label:'fingers-left-side',
                raw_points:'332,436,354,433,358,477,321,480'
            },
            {
                label:'chest-left-side',
                raw_points:'162,300,209,328,261,334,266,314,258,290,250,269,246,240,221,226,221,186,193,202,171,238,170,269'
            },
            {
                label:'abdomen-left-side',
                raw_points:'236,358,234,330,210,327,162,302,164,330,165,363,170,389,201,370'
            },
            {
                label:'lowerback-left-side',
                raw_points:'236,358,233,329,262,335,266,362,271,377'
            },
            {
                label:'thigh-left-side',
                raw_points:'177,415,216,462,234,465,261,449,264,505,256,559,192,559,174,511'
            },
            {
                label:'kneecap-left-side',
                raw_points:'229,559,242,613,208,628,188,558'
            },
            {
                label:'backofknee-left-side',
                raw_points:'241,612,273,604,255,587,256,560,228,559'
            },
            {
                label:'leg-left-side',
                raw_points:'233,751,276,752,277,704,283,671,282,651,273,615,264,604,212,627,229,686,235,732'
            },
            {
                label:'ankle-left-side',
                raw_points:'234,752,276,751,282,778,220,778'
            },
            {
                label:'heel-left-side',
                raw_points:'260,812,258,778,283,781,281,810'
            },
            {
                label:'foot-left-side',
                raw_points:'195,791,207,818,261,812,260,779,218,777'
            },
            {
                label:'toes-left-side',
                raw_points:'206,820,193,791,156,802,167,816'
            },
            {
                label:'pelvis-left-side',
                raw_points:'180,417,186,382,171,390'
            },
            {
                label:'hips-left-side',
                raw_points:'179,416,215,462,232,463,204,370,185,380'
            },
            {
                label:'gluteus-left-side',
                raw_points:'233,462,205,371,234,359,269,376,278,393,283,418,271,447'
            }
        ]
    },
    right:{
        regions:[
            {
                label:'cranial-right-side',
                raw_points:'271,163,235,127,220,117,202,129,194,105,195,78,214,65,231,62,258,69,274,97,282,121,282,134'
            },
            {
                label:'neck-right-side',
                raw_points:'260,213,210,178,181,172,192,162,201,145,200,126,215,119,234,126,265,159,254,162,244,186'
            },
            {
                label:'shoulder-right-side',
                raw_points:'169,247,149,224,149,206,160,188,177,172,208,178,217,187,218,204,215,216,205,231,201,238,192,242'
            },
            {
                label:'arm-right-side',
                raw_points:'181,292,156,270,134,277,136,256,141,239,149,224,168,247,198,239,194,271'
            },
            {
                label:'elbow-right-side',
                raw_points:'129,300,154,295,180,319,180,293,156,269,132,277'
            },
            {
                label:'forearm-right-side',
                raw_points:'118,389,143,396,152,366,162,346,178,317,153,296,128,301,120,331,122,361'
            },
            {
                label:'wrist-right-side',
                raw_points:'112,401,140,406,146,397,118,389'
            },
            {
                label:'hand-right-side',
                raw_points:'90,474,117,476,126,448,140,408,108,400'
            },
            {
                label:'thumb-right-side',
                raw_points:'117,402,113,441,126,439,133,406'
            },
            {
                label:'fingers-right-side',
                raw_points:'100,433,121,442,115,475,106,480,89,470,88,464'
            },
            {
                label:'chest-right-side',
                raw_points:'280,297,229,328,182,333,180,297,193,273,197,252,206,234,213,218,218,207,217,190,211,179,260,214,276,236,277,273'
            },
            {
                label:'abdomen-right-side',
                raw_points:'207,356,250,369,272,392,277,383,278,363,279,345,279,328,279,296,231,327,208,331'
            },
            {
                label:'lowerback-right-side',
                raw_points:'206,329,206,358,188,361,176,370,181,333'
            },
            {
                label:'pelvis-right-side',
                raw_points:'263,420,272,390,257,380'
            },
            {
                label:'hips-right-side',
                raw_points:'255,377,260,412,241,442,224,458,240,364'
            },
            {
                label:'gluteus-right-side',
                raw_points:'240,367,224,456,171,441,164,424,160,401,168,382,177,366,204,358'
            },
            {
                label:'thigh-right-side',
                raw_points:'249,567,192,563,184,526,180,484,184,464,181,447,168,441,221,455,239,442,259,412,270,474,267,520,256,547'
            },
            {
                label:'kneecap-right-side',
                raw_points:'221,564,205,616,234,625,243,609,252,567'
            },
            {
                label:'backofknee-right-side',
                raw_points:'204,614,179,604,191,586,191,563,221,564'
            },
            {
                label:'leg-right-side',
                raw_points:'167,749,208,745,209,718,216,683,221,652,233,625,176,602,166,626,159,661,169,689,168,722'
            },
            {
                label:'ankle-right-side',
                raw_points:'168,748,206,747,215,771,163,777'
            },
            {
                label:'heel-right-side',
                raw_points:'181,775,185,812,163,811,163,776'
            },
            {
                label:'foot-right-side',
                raw_points:'180,773,215,770,232,781,249,789,241,818,185,812'
            },
            {
                label:'toes-right-side',
                raw_points:'242,815,249,790,285,805,269,821'
            }
        ]
    },
    front:{
        regions:[
            {
                label:'cranial-front-R',
                raw_points:'222,62,223,159,262,132,254,66'
            },
            {
                label:'cranial-front-L',
                raw_points:'222,61,223,158,178,128,187,67'
            },
            {
                label:'neck-front-R',
                raw_points:'223,159,248,144,249,163,296,181,294,191,223,208'
            },
            {
                label:'neck-front-L',
                raw_points:'221,158,196,142,197,160,149,184,153,190,222,207'
            },
            {
                label:'shoulder-front-R',
                raw_points:'297,178,295,193,307,222,304,235,326,252,330,216,318,194'
            },
            {
                label:'shoulder-front-L',
                raw_points:'147,181,157,195,137,234,117,250,116,219,126,195'
            },
            {
                label:'chest-front-R',
                raw_points:'223,209,295,192,306,222,303,233,284,314,264,300,241,293,222,284'
            },
            {
                label:'chest-front-L',
                raw_points:'222,208,158,192,138,235,159,308,192,292,221,284'
            },
            {
                label:'abdomen-front-R',
                raw_points:'284,315,263,300,241,294,222,285,221,382,252,386,274,379,287,362'
            },
            {
                label:'abdomen-front-L',
                raw_points:'222,284,191,294,160,309,157,364,173,382,198,386,220,380'
            },
            {
                label:'hips-front-R',
                raw_points:'286,365,276,380,300,454'
            },
            {
                label:'hips-front-L',
                raw_points:'172,384,157,365,145,446'
            },
            {
                label:'pelvis-front-R',
                raw_points:'221,382,223,416,249,415,283,402,275,380,251,387'
            },
            {
                label:'pelvis-front-L',
                raw_points:'221,381,222,418,199,414,162,407,172,382,196,387'
            },
            {
                label:'groin-front-R',
                raw_points:'234,453,247,415,222,417,224,453'
            },
            {
                label:'groin-front-L',
                raw_points:'222,417,193,414,211,453,223,453'
            },
            {
                label:'thigh-front-R',
                raw_points:'224,454,233,454,249,415,282,403,299,454,298,535,288,562,269,559,236,577'
            },
            {
                label:'thigh-front-L',
                raw_points:'222,455,212,454,191,412,162,408,146,447,145,532,156,559,178,562,209,577'
            },
            {
                label:'kneecap-front-R',
                raw_points:'290,561,269,559,237,577,240,616,266,622,293,612'
            },
            {
                label:'kneecap-front-L',
                raw_points:'209,577,178,562,156,560,157,607,177,619,205,615'
            },
            {
                label:'leg-front-R',
                raw_points:'240,617,267,623,293,613,295,647,274,733,245,730,235,642'
            },
            {
                label:'leg-front-L',
                raw_points:'205,616,178,620,156,607,151,644,170,734,197,731,210,644'
            },
            {
                label:'ankle-front-R',
                raw_points:'242,730,275,734,279,762,238,761'
            },
            {
                label:'ankle-front-L',
                raw_points:'199,730,168,734,166,759,207,760'
            },
            {
                label:'foot-front-R',
                raw_points:'241,797,289,791,280,763,237,762'
            },
            {
                label:'foot-front-L',
                raw_points:'165,760,208,761,205,796,158,791'
            },
            {
                label:'toes-front-R',
                raw_points:'241,798,290,792,297,815,246,819'
            },
            {
                label:'toes-front-L',
                raw_points:'157,792,205,797,197,820,148,813'
            },
            {
                label:'arm-front-R',
                raw_points:'302,234,326,252,336,271,320,300,306,316,303,298,292,282'
            },
            {
                label:'arm-front-L',
                raw_points:'137,235,114,252,110,272,140,312,141,294,152,282'
            },
            {
                label:'elbow-front-R',
                raw_points:'336,273,324,297,305,317,309,339,347,294'
            },
            {
                label:'elbow-front-L',
                raw_points:'109,272,141,315,135,338,97,294'
            },
            {
                label:'forearm-front-R',
                raw_points:'347,294,357,319,362,360,373,383,345,397,335,370,309,339'
            },
            {
                label:'forearm-front-L',
                raw_points:'134,339,97,294,82,360,73,383,100,397,112,368'
            },
            {
                label:'wrist-front-R',
                raw_points:'374,384,344,398,346,410,383,395'
            },
            {
                label:'wrist-front-L',
                raw_points:'102,398,72,384,62,393,99,413'
            },
            {
                label:'fingers-front-R',
                raw_points:'353,431,386,430,400,456,370,464,352,451'
            },
            {
                label:'fingers-front-L',
                raw_points:'95,436,57,429,48,456,76,465,90,453'
            },
            {
                label:'thumb-front-R',
                raw_points:'382,396,398,406,409,425,396,425,374,403'
            },
            {
                label:'thumb-front-L',
                raw_points:'62,395,43,408,31,429,56,421,71,400'
            },
            {
                label:'hand-front-R',
                raw_points:'372,401,397,430,347,432,344,410'
            },
            {
                label:'hand-front-L',
                raw_points:'71,398,99,414,95,436,53,430'
            }
        ]
    },
    back:{
        regions:[
            {
                label:'cranial-back-L',
                raw_points:'222,137,224,63,205,66,193,83,190,107,186,127,196,136'
            },
            {
                label:'neck-back-L',
                raw_points:'212,136,201,138,196,146,196,154,188,161,177,165,168,170,160,174,153,178,167,180,177,179,193,177,208,177,215,177,212,175'
            },
            {
                label:'cranial-back-R',
                raw_points:'225,65,233,65,239,67,246,72,251,81,253,97,254,103,258,111,257,117,256,126,253,133,245,135,236,134,222,133'
            },
            {
                label:'neck-back-R',
                raw_points:'229,138,236,138,248,138,247,144,249,155,258,159,268,165,276,168,286,171,284,178,268,181,253,178,234,176,230,178'
            },
            {
                label:'shoulder-back-L',
                raw_points:'151,216,159,214,165,209,168,202,167,193,163,186,158,181,154,178,146,177,129,183,118,193,118,203,115,209,111,223,113,233,124,227,133,224,141,219'
            },
            {
                label:'shoulder-back-R',
                raw_points:'281,215,275,212,270,202,267,188,272,183,278,179,285,174,297,176,308,180,320,191,324,198,328,207,332,215,332,231,304,217'
            },
            {
                label:'scapular-back-L',
                raw_points:'163,186,172,186,186,195,190,203,195,215,194,224,196,235,191,240,182,247,173,252,167,252,161,244,155,237,153,231,149,223,172,208,169,196,168,206'
            },
            {
                label:'scapular-back-R',
                raw_points:'269,197,264,195,257,193,250,194,246,204,244,214,239,222,244,233,255,239,264,244,275,247,282,246,288,247,290,239,292,229,292,222,281,216,273,214,271,206'
            },
            {
                label:'chest-back-L',
                raw_points:'215,308,210,313,196,313,183,312,170,314,159,308,155,298,153,288,153,279,152,273,152,261,156,245,151,248,167,252,175,253,185,247,193,242,194,231,195,220,194,209,187,197,184,191,164,185,158,180,182,179,197,177,206,178,212,179,214,179'
            },
            {
                label:'chest-back-R',
                raw_points:'275,182,257,179,249,178,237,177,230,185,233,193,232,202,231,210,231,231,233,239,234,252,235,265,233,274,235,292,236,299,237,308,248,308,257,308,267,308,275,308,282,307,286,297,291,289,293,280,294,272,289,264,286,252,280,250,269,246,261,244,255,240,246,236,239,227,238,218,242,212,245,207,247,199,248,201,254,193,267,196'
            },
            {
                label:'cervical-spine-back',
                raw_points:'213,139,219,139,225,137,230,143,229,149,229,156,229,162,230,179,221,178,213,177'
            },
            {
                label:'thoraic-spine-back',
                raw_points:'214,180,222,180,229,181,229,187,230,193,229,202,229,209,229,218,229,229,231,242,232,248,233,262,232,272,232,263,233,278,232,284,233,290,235,300,236,307,229,309,215,309,215,231'
            },
            {
                label:'lower-back-L',
                raw_points:'160,366,161,313,215,313,214,366,199,369'
            },
            {
                label:'lower-back-R',
                raw_points:'239,308,238,364,258,358,273,358,286,362,285,308'
            },
            {
                label:'lower-spine-back',
                raw_points:'215,310,240,307,237,363,215,365'
            },
            {
                label:'sacral-back-L',
                raw_points:'225,364,220,401,217,387,206,369'
            },
            {
                label:'sacral-back-R',
                raw_points:'226,365,246,363,234,380,222,398'
            },
            {
                label:'gluteus-back-L',
                raw_points:'158,365,206,371,217,391,220,421,219,433,210,441,192,449,158,450,145,455'
            },
            {
                label:'gluteus-back-R',
                raw_points:'287,363,298,454,290,445,275,438,253,441,232,436,224,428,220,400,234,381,253,359'
            },
            {
                label:'thigh-back-L',
                raw_points:'220,435,210,560,186,534,155,560,146,510,148,455,164,450,192,448'
            },
            {
                label:'thigh-back-R',
                raw_points:'236,558,263,535,289,562,303,509,300,446,266,444,222,434'
            },
            {
                label:'back-of-knee-L',
                raw_points:'156,562,185,535,210,559,201,610,180,605,157,609'
            },
            {
                label:'back-of-knee-R',
                raw_points:'234,559,265,537,286,561,288,607,265,601,245,610'
            },
            {
                label:'leg-back-L',
                raw_points:'198,746,170,749,149,647,156,609,198,608,206,649'
            },
            {
                label:'leg-back-R',
                raw_points:'248,743,275,744,294,670,289,608,266,601,247,610,238,646'
            },
            {
                label:'ankle-back-L',
                raw_points:'201,746,207,766,164,771,169,749'
            },
            {
                label:'ankle-back-R',
                raw_points:'248,744,242,764,278,771,278,745'
            },
            {
                label:'foot-back-L',
                raw_points:'179,772,182,785,172,806,155,794,160,771'
            },
            {
                label:'foot-back-R',
                raw_points:'266,770,261,783,274,803,291,793,282,770'
            },
            {
                label:'heel-back-R',
                raw_points:'266,770,241,766,238,813,281,814,256,781'
            },
            {
                label:'heel-back-L',
                raw_points:'180,770,209,767,208,816,168,815,186,783,181,779'
            },
            {
                label:'arm-back-L',
                raw_points:'94,280,113,292,135,300,154,247,147,219,116,231'
            },
            {
                label:'arm-back-R',
                raw_points:'296,221,336,236,352,286,334,291,311,296,286,255'
            },
            {
                label:'elbow-back-L',
                raw_points:'90,281,134,303,134,320,82,303'
            },
            {
                label:'elbow-back-R',
                raw_points:'307,299,357,286,362,305,308,318'
            },
            {
                label:'forearm-back-L',
                raw_points:'62,385,89,394,136,321,80,304'
            },
            {
                label:'forearm-back-R',
                raw_points:'309,319,367,305,382,380,352,394'
            },
            {
                label:'wrist-back-L',
                raw_points:'58,384,89,394,84,412,51,396'
            },
            {
                label:'wrist-back-R',
                raw_points:'353,395,385,380,397,396,357,414'
            },
            {
                label:'hand-back-L',
                raw_points:'42,429,80,436,84,412,53,398,41,410'
            },
            {
                label:'hand-back-R',
                raw_points:'357,414,400,395,404,411,403,427,364,434'
            },
            {
                label:'thumb-back-L',
                raw_points:'50,400,40,410,40,421,18,436,24,412'
            },
            {
                label:'thumb-back-R',
                raw_points:'402,396,405,411,405,426,432,438,422,413'
            },
            {
                label:'fingers-back-L',
                raw_points:'40,430,83,437,72,478,22,472'
            },
            {
                label:'fingers-back-R',
                raw_points:'363,435,405,428,428,472,374,481'
            }
        ]
    }
};
const images = {
    left:'../../../assets/male-mus-left.png',
    front:'../../../assets/male-mus-front.png',
    right:'../../../assets/male-mus-right.png',
    back:'../../../assets/male-mus-back.png'
};

BodyImageLeft = (props) => {
    return (
        <Image href={require('../../../assets/male-mus-left.png')}
               x="0%"
               y="0%"
               width="100%"
               height="100%"
               preserveAspectRatio="xMidYMid slice"
               opacity="1"
               clipPath="url(#clip)"
        />
    )
};
BodyImageRight = (props) => {
    return (
        <Image href={require('../../../assets/male-mus-right.png')}
               x="0%"
               y="0%"
               width="100%"
               height="100%"
               preserveAspectRatio="xMidYMid slice"
               opacity="1"
               clipPath="url(#clip)"
        />
    )
};
BodyImageFront = (props) => {
    //502,136,452,153,435,181,430,233,422,259,435,288,446,324,470,344,502,348,533,339,556,313,563,288,576,274,576,237,567,212,561,177,541,151
    return (
        <G>
        <Image href={require('../../../assets/male-mus-front.png')}
               x="0%"
               y="0%"
               width="100%"
               height="100%"
               preserveAspectRatio="xMidYMid slice"
               opacity="1"
               clipPath="url(#clip)"
        />
            <Polygon
                points="189,17,169,31,167,50,169,65,173,73,182,79,194,80,200,77,204,69,209,55,209,41,205,29,199,20,194,18,179,19,173,23,167,40"
                fill="none"
                stroke="none"
                strokeWidth="0"
                title='Head'
                onPress={props.editable?(ev) => props.drawPoint(ev,'Head'):null}
            />
            <Polygon
                points="306,258,313,258,313,268,308,268"
                fill="none"
                stroke="none"
                strokeWidth="0"
                title='Thumb'
                onPress={props.editable?(ev) => props.drawPoint(ev,'Thumb'):null}
            />
            <Circle
                cx={props.locationX || -20}
                cy={props.locationY || -20}
                r="1.5%"
                fill="red"
            />
        </G>
    )
};
BodyImageBack = (props) => {
    return (
        <G>
        <Image href={require('../../../assets/male-mus-back.png')}
               x="0%"
               y="0%"
               width="100%"
               height="100%"
               preserveAspectRatio="xMidYMid slice"
               opacity="1"
               clipPath="url(#clip)"
        />

            <Polygon
                points="189,17,169,31,167,50,169,65,173,73,182,79,194,80,200,77,204,69,209,55,209,41,205,29,199,20,194,18,179,19,173,23,167,40"
                fill="none"
                stroke="none"
                strokeWidth="0"
                title='Head'
                onPress={props.editable?(ev) => props.drawPoint(ev,'Head'):null}
            />
            <Polygon
                points="306,258,313,258,313,268,308,268"
                fill="none"
                stroke="none"
                strokeWidth="0"
                title='Thumb'
                onPress={props.editable?(ev) => props.drawPoint(ev,'Thumb'):null}
            />
            <Circle
                cx={props.locationX || -20}
                cy={props.locationY || -20}
                r="1.5%"
                fill="red"
            />
        </G>
    )
};

export default class HumanBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'front'
        }
    }


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.humanPicContainer}>
                    <Svg
                        height="555"
                        width="274"
                        // height="512"
                        // width="372"
                    >
                            {
                                this.state.selectedTab === 'left' ? <BodyImageLeft {...this.props}/>:
                                this.state.selectedTab === 'right' ? <BodyImageRight {...this.props}/>:
                                this.state.selectedTab === 'front' ? <BodyImageFront {...this.props}/>:
                                this.state.selectedTab === 'back' ? <BodyImageBack {...this.props}/>:null
                            }


                            {/*<Rect*/}
                            {/*x="0"*/}
                            {/*y="0"*/}
                            {/*width="100%"*/}
                            {/*height="100%"*/}
                            {/*stroke="none"*/}
                            {/*strokeWidth="0"*/}
                            {/*fill="none"*/}
                            {/*/>*/}

                    </Svg>
                </View>
                <View style={styles.bodyTabsContainer}>
                    <TouchableOpacity onPress={() => this.setState({selectedTab:'left'})}>
                        <Text semiBold style={[styles.tabText, this.state.selectedTab === 'left'?styles.selectedTab:{}]}>Left</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({selectedTab:'front'})}>
                        <Text semiBold style={[styles.tabText, this.state.selectedTab === 'front'?styles.selectedTab:{}]}>Front</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({selectedTab:'right'})}>
                        <Text semiBold style={[styles.tabText, this.state.selectedTab === 'right'?styles.selectedTab:{}]}>Right</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({selectedTab:'back'})}>
                        <Text semiBold style={[styles.tabText, this.state.selectedTab === 'back'?styles.selectedTab:{}]}>Back</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}


/*
    return(
        <View style={styles.container}>
            <View style={styles.humanPicContainer}>
                <Image source={require('../../../assets/humanFront.png')}
                       style={styles.humanPic}
                       onPress={(ev) => console.warn(ev)}
                />
            </View>
            <View style={styles.bodyTabsContainer}>
                <TouchableOpacity>
                    <Text semiBold style={[styles.tabText,styles.selectedTab]}>Left</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text semiBold style={[styles.tabText]}>Front</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text semiBold style={[styles.tabText]}>Right</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text semiBold style={[styles.tabText]}>Back</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
 */
