import Yash from '../../assets/img/Yash.jpg'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useEffect, useState } from 'react';
const About = (props) => {
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = Yash;
        img.onload = () => setImgLoaded(true);
    }, []);

    if (!imgLoaded) {
        return (
            <div className='abt' style={{ textAlign: 'center', padding: '2rem' }}>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Loading...</p>
            </div>
        );
    }
    return (
        <>
            <div className='abt'>
                <div className="imgh">
                    <img className='adz' src={Yash} alt="Error 404" />
                </div>
                <div className="conth">
                    <div className="txtmy">
                        <h2 style={{ fontWeight: "bold" }}>About Me</h2>
                        <h1 style={{ color: "#D91747", fontWeight: "bold" }}>Web designer</h1>
                        <p>Hi, I’m a passionate web designer who recently completed my design course and turned my love for building beautiful, functional websites into a profession.
                            I specialize in creating custom websites that are visually appealing, user-friendly, and tailored to your unique vision. Every project is crafted with creativity, care, and attention to detail—because you deserve a digital presence that reflects both your brand and your personality.</p>
                    </div>
                    <div className="contactInfo">
                        <div className="ci-1">
                            <p><FiberManualRecordIcon fontSize='small' />  Name : Yash Jain</p>
                            <p><FiberManualRecordIcon fontSize='small' />  Email : Yashsushillunkad313@gmail.com</p>
                            <p><FiberManualRecordIcon fontSize='small' />  ph-no : 9789800288</p>
                        </div>
                        <div className="ci-2">
                            <div className="ci-12" style={{ display: "flex", flexDirection: "row" }}>
                                <FiberManualRecordIcon fontSize='small' style={{ marginTop: "4px", marginRight: "4px" }} />
                                <p> Address - Nattu pilliyar koil st , sowcarpet , chennai</p>
                            </div>
                            <p><FiberManualRecordIcon fontSize='small' /> Postal code - 600001</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
