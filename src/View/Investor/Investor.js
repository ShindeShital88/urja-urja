import Investor from '../Components/Investor/Investor';
import images from '../Components/Investor/image.png'
export default function Invest(){
    return(
    <>
        <Card images={images} text='BUSINESS RESPONSIBILITY POLICY' watch={watch} cloude={cloude}/>
<Card images={images} text='Code for Independent Director ' watch={watch} cloude={cloude}/>
<Card images={images} text='CODE OF CONDUCT FOR DIRECTORS' watch={watch} cloude={cloude}/>
<Card images={images} text='Code of conduct for insider trading' watch={watch} cloude={cloude}/>
<Card images={images} text='Criteria of Payment to Non Executive ' watch={watch} cloude={cloude}/>
<Card images={images} text='Nomination and Remuneration' watch={watch} cloude={cloude}/>
<Card images={images} text='POLICY FOR DETERMINATION ' watch={watch} cloude={cloude}/>
<Card images={images} text='Policy on Related Party Transaction' watch={watch} cloude={cloude}/>
<Card images={images} text='POSH' watch={watch} cloude={cloude}/>
<Card images={images} text='Preservation of documents ' watch={watch} cloude={cloude}/>
<Card images={images} text='Whistle Blower Policy' watch={watch} cloude={cloude}/>
    
    </>

    );
}