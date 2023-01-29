import '../css/PersonalInfo.css'

export default function PersonalInfo(){
    return(
        <form className="personalInfoForm">
            <h1 className="personalInfo">Personal info</h1>
            <p className="personalInfo-instructions">
                Please provide your name, email address, and phone number.
            </p>
            <div className="inputs">
                <label className = "name-label">Name</label>
                <input type = "text" placeholder = "eg: Stephen King" className="name-input" />
                <label className = "email-label">Email Address</label>
                <input type = "email" placeholder = "eg: stephenking@lorem.com" className="email-input" />
                <label className = "phone-label">Phone Number</label>
                <input type = "phone" placeholder="+1 234 567 890" className = "phone-input" />
            </div>
        </form>
    )
}