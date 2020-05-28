import React from "react";
import './Home.css';

class Home extends React.Component {

    render() {
        return (
            <div style={{marginTop:'100px', marginLeft:'30px'}}>
                <h1 className="title">
                    Giới thiệu về Hệ thống Giáo dục Vinschool
                </h1>
                <p className="content">
                    Vinschool là hệ thống giáo dục không lợi nhuận, liên cấp từ bậc mầm non đến Trung học phổ thông do
                    Tập đoàn Vingroup đầu tư phát triển. Mục tiêu của Vinschool là xây dựng một ngôi trường Việt Nam
                    mang đẳng cấp quốc tế, tìm kiếm và bồi dưỡng nhân tài ở lứa tuổi phổ thông.

                    Vinschool không chỉ được đầu tư bài bản về cơ sở hạ tầng mà còn nhận được sự đầu tư đặc biệt từ Tập
                    đoàn Vingroup để tuyển chọn và đào tạo giáo viên chất lượng cao cũng như xây dựng và phát triển các
                    chương trình môn học, chương trình rèn kỹ năng mềm, giáo dục phẩm chất để đào tạo một thế hệ công
                    dân Việt tinh hoa, năng động, văn minh, hội nhập và kế thừa các giá trị truyền thống tốt đẹp.
                </p>
            </div>
        );
    }
}


export default Home;
