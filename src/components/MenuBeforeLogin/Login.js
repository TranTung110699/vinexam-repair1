import React from "react";
import './Login.css';

class Login extends React.Component {

    handleClick = e => {
        console.log('click ', e);
    };

    constructor(props) {
        super(props);
        //Khởi tạo state chứa giá trị của input
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <div className="container login">
                <div className="row">
                    <div className="col-lg-4 col-md-3 col-sm-2">
                    </div>
                    <div style={{border:'1px solid #cc1818',backgroundColor:'wheat'}} className="col-lg-4 col-md-6 col-sm-8">

                        <form
                            onSubmit={e => {
                                this.submitForm(e);
                            }}
                        >
                            <div align="left" className="titlelr">Đăng nhập</div>
                            <br/>
                            <br/>
                            <div className="form-group">
                                <input id="mail" name="email" type="text" className="form-controllg "
                                       placeholder="Email" onChange={e => this.changeInputValue(e)} required/>
                            </div>
                            <div className="form-group">
                                <input id="pass" type="password" name="password"
                                       className="form-controllg " placeholder="Password" onChange={e => this.changeInputValue(e)} required/>
                            </div>
                            <div style={{paddingTop:'50px'}} align="center" className="form-group">
                                <input style={{width: '100%', height: '35px'}} className="btnlr" id="submit" type="submit"
                                       value="Đăng nhập"/>
                            </div>

                        </form>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-2">
                    </div>
                </div>
            </div>
        );
    }

    changeInputValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validationFormEmail() {
        let returnDataem = {
            error : false,
            msg: ''
        }

        const {email, password} = this.state
        //Kiểm tra email
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            returnDataem = {
                error: true,
                msg: 'Không đúng định dạng email'
            }
        }
        return returnDataem;
    }

    validattionFormPass(){
        //Kiểm tra password
        let returnDatapa = {
            error : false,
            msg: ''
        }
        const {email, password} = this.state
        const rep =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if(!rep.test(password)) {
            returnDatapa = {
                error: true,
                msg: 'Mật khẩu phải lớn hơn 8 ký tự,có chữ hoa,chữ thường và ký tự đặc biệt'
            }
        }
        return returnDatapa;
    }

    submitForm(e) {
        e.preventDefault();

        //Gọi hàm validationForm() dùng để kiểm tra form
        const validationem = this.validationFormEmail();
        const validationpa = this.validattionFormPass();
        //Kiểm tra lỗi của input trong form và hiển thị
        if(validationpa.error || validationem.error){
            alert(validationem.msg+"\n"+validationpa.msg)
        }else{
            alert('Login successfully');
        }
    }
}



export default Login;
