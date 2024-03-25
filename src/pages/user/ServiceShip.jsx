import React from "react";
import { Helmet } from "react-helmet";
import "../../assets/table.css";

const ServiceShip = () => {
  return (
    <>
      <Helmet>
        <title>Chính sách giao nhận - vận chuyển - kiểm hàng | TEELAB</title>
      </Helmet>
      <div className="container mx-auto px-[15px] mt-[56px] mb-[30px]">
        <h1 className="text-[40px] text-[#333] mb-5 font-light">
          Chính sách giao nhận, vận chuyển, kiểm hàng
        </h1>
        <div className="mb-2">
          <span className="text-[#333] font-extrabold">
            1. Phạm vi giao hàng:
          </span>
        </div>
        <div className="mb-6">
          <span className="leading-8">
            Hiện nay, chúng tôi chỉ có thể chuyển hàng đến các địa chỉ trong
            phạm vi đất nước Việt Nam. Thời gian của đơn hàng được tính từ lúc
            chúng tôi hoàn tất việc xác nhận đơn hàng với bạn đến khi nhận được
            hàng, không kể các ngày lễ, Thứ 7 và Chủ Nhật. Trong đó, thời gian
            giao hàng tính từ lúc đơn hàng được chúng tôi chuyển giao cho đơn vị
            vận chuyển. <br />
            Lưu ý: Thời giao giao hàng có thể kéo dài hơn dự kiến do ảnh hưởng
            bởi tình hình thiên tai, dịch bệnh, hoặc các tình huống bất khả
            kháng khác ... <br />
          </span>
        </div>
        <div className="mb-2">
          <span className="text-[#333] font-extrabold">2. Phí giao hàng:</span>
        </div>
        <div className="mb-6">
          <span className="leading-8">
            Tùy vào địa điểm nhận hàng của bạn mà phí giao hàng được ước tính
            như sau: <br />
          </span>
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr>
                <th colSpan={2}>
                  <b>Khu vực</b>
                </th>
                <th>
                  <b>
                    Phí giao hàng <br /> (VNĐ)
                  </b>
                </th>
                <th>
                  <b>Thời gian giao hàng</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>
                  <b>Hồ Chí Minh</b>
                </td>
                <td>
                  <p className="mb-4">
                    <b>Nội thành</b>
                  </p>
                </td>
                <td>
                  <p className="mb-4">
                    <b>20.000</b>
                  </p>
                </td>
                <td rowSpan={2}>
                  <b>Từ 03 - 05 ngày</b>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="mb-4">
                    <b>Ngoại thành</b>
                  </p>
                </td>
                <td>
                  <p className="mb-4">
                    <b>20.000</b>
                  </p>
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>
                  <b>Hà Nội</b>
                </td>
                <td>
                  <p className="mb-4">
                    <b>Nội thành</b>
                  </p>
                </td>
                <td>
                  <p className="mb-4">
                    <b>20.000</b>
                  </p>
                </td>
                <td rowSpan={2}>
                  <b>Từ 01 - 03 ngày</b>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="mb-4">
                    <b>Ngoại thành</b>
                  </p>
                </td>
                <td>
                  <p className="mb-4">
                    <b>20.000</b>
                  </p>
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>
                  <b>
                    Các tỉnh phía Nam <br />
                    (từ Bình Định tới mũi Cà Mau)
                  </b>
                </td>
                <td>
                  <p className="mb-4">
                    <b>Nội thành</b>
                  </p>
                </td>
                <td>
                  <p className="mb-4">
                    <b>20.000</b>
                  </p>
                </td>
                <td rowSpan={2}>
                  <b>Từ 03 - 05 ngày</b>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="mb-4">
                    <b>Ngoại thành</b>
                  </p>
                </td>
                <td>
                  <p className="mb-4">
                    <b>20.000</b>
                  </p>
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>
                  <b>Các tỉnh miền Trung</b>
                </td>
                <td>
                  <p className="mb-4">
                    <b>Nội thành</b>
                  </p>
                </td>
                <td>
                  <p className="mb-4">
                    <b>20.000</b>
                  </p>
                </td>
                <td rowSpan={2}>
                  <b>Từ 03 - 04 ngày</b>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="mb-4">
                    <b>Ngoại thành</b>
                  </p>
                </td>
                <td>
                  <p className="mb-4">
                    <b>20.000</b>
                  </p>
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>
                  <b>Các tỉnh còn lại</b>
                </td>
                <td>
                  <p className="mb-4">
                    <b>Nội thành</b>
                  </p>
                </td>
                <td>
                  <p className="mb-4">
                    <b>20.000</b>
                  </p>
                </td>
                <td rowSpan={2}>
                  <b>Từ 03 - 05 ngày</b>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="mb-4">
                    <b>Ngoại thành</b>
                  </p>
                </td>
                <td>
                  <p className="mb-4">
                    <b>20.000</b>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <span>
            - Chính sách miễn phí giao hàng sẽ được áp dụng theo chương trình ưu
            đãi của từng thời điểm và được thông báo tại website. <br />- Phí
            giao hàng (nếu có) sẽ được tính vào giá trị đơn hàng khi khách hàng
            thanh toán.
          </span>
          <div className="mb-2 mt-6">
            <span className="text-[#333] font-extrabold">
              3. Xem hàng và Đồng kiểm:
            </span>
          </div>
          <div className="mb-6">
            <span className="leading-8">
              Các đơn hàng tại https://teelab.vn/ sẽ được áp dụng chính sách “Mở
              hộp và đồng kiểm trước khi nhận hàng”. Theo đó, khách hàng được
              khuyến khích mở kiện hàng kiểm tra để kiểm tra ngoại quan về sản
              phẩm (*) trước khi thanh toán đầy đủ cho nhân viên giao hàng.{" "}
              <br />
              Đối với các đơn hàng đã đồng kiểm và phát hiện lỗi nhưng không
              khiếu nại với nhân viên giao hàng, chúng tôi rất tiếc vì không thể
              hỗ trợ hoàn trả. <br />
              (*) Bạn chỉ được kiểm tra về mặt ngoại quan của sản phẩm xem sản
              phẩm có đúng như bạn đã đặt hàng không? Số lượng, màu sắc có giống
              với mô tả không? Sản phẩm có bị bể vỡ, móp méo trong quá trình vận
              chuyển không? Việc kiểm tra sẽ không bao gồm mở seal (niêm phong)
              riêng của sản phẩm (gây ảnh hưởng đến tem dán niêm phong, bao bì
              sản phẩm, …) hay kiểm tra sâu (sử dụng thử…). <br />
              Trong trường hợp khách hàng không thực hiện đồng kiểm khi nhận
              hàng, chúng tôi khuyến khích khách hàng chụp lại kiện hàng khi
              nhận từ nhân viên giao hàng và quay video quá trình mở kiện hàng
              để làm bằng chứng nếu có tranh chấp về sau. <br />
              Khách vui hàng lòng từ chối nhận hàng khi phát hiện kiện hàng có
              dấu hiệu ướt, rách, móp méo, không còn nguyên vẹn hoặc sai thông
              tin người nhận. <br />
              Nếu quý khách không hài lòng hoặc có vấn đề với sản phẩm nhận
              được, quý khách có thể khiếu nại đến chúng tôi thông qua website
              https://teelab.vn/ hoặc Email: teelabvn@gmail.com; Điện thoại:
              0865539083 trong vòng 24 giờ kể từ khi nhận hàng. Quý khách lưu ý,
              sau khoảng thời gian này, chúng tôi sẽ không hỗ trợ bất kỳ trường
              hợp khiếu nại nào khác. <br />
            </span>
          </div>
          <div className="mb-2">
            <span className="text-[#333] font-extrabold">
              4. Giao hàng không thành công:
            </span>
          </div>
          <div className="mb-6">
            <span className="leading-8">
              Đơn hàng sau 03 lần không được giao thành công sẽ được tự động
              hoàn trả về kho của chúng tôi và không thể khôi phục lại. Đối với
              đơn hàng đã thanh toán, chúng tôi sẽ thực hiện thủ tục hoàn tiền
              trong vòng 7 đến 45 ngày làm việc (không kể các ngày lễ, Thứ 7 và
              Chủ Nhật) sau khi xác nhận đơn hàng đã được hoàn về hợp lệ.
            </span>
          </div>
          <div className="mb-2">
            <span className="text-[#333] font-extrabold">
              5. Không thể giao hàng:
            </span>
          </div>
          <div className="mb-6">
            <span className="leading-8">
              Đơn hàng đã được chuyển giao cho đơn vị vận chuyển nhưng không thể
              giao do trường hợp bất khả kháng (thiên tai, dịch bệnh, ...) tại
              khu vực giao hàng, đơn sẽ được tự động hoàn trả về kho của chúng
              tôi và không thể khôi phục lại. Đối với đơn hàng đã thanh toán,
              chúng tôi sẽ thực hiện thủ tục hoàn tiền trong vòng 7 đến 45 ngày
              làm việc (không kể các ngày lễ, Thứ 7 và Chủ Nhật) sau khi xác
              nhận đơn hàng đã được hoàn về hợp lệ.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceShip;
