import React from "react";
import { Helmet } from "react-helmet";
import payment from "../../../public/payment.png";

const ServicePaymentMethods = () => {
  return (
    <>
      <Helmet>
        <title>Phương thức thanh toán | TEELAB</title>
      </Helmet>
      <div className="container mx-auto px-[15px] mt-[56px] mb-[30px]">
        <h1 className="text-[40px] text-[#333] mb-5 font-light">
          Phương thức thanh toán
        </h1>
        <div className="flex justify-center">
          <img src={payment} alt="" />
        </div>
        <div className="mb-6">
          <span className="leading-8">
            Khách hàng có thể tham khảo các phương thức thanh toán sau đây và
            lựa chọn áp dụng phương thức phù hợp: <br />
            - Cách 1: Thanh toán khi nhận hàng (COD – giao hàng và thu tiền tận
            nơi). <br />- Cách 2: Thanh toán trực tuyến thông qua thẻ tín dụng
            quốc tế. <br />
            - Cách 3: Thanh toán trực tuyến thông qua thẻ ngân hàng trong nước
            có đăng kí Internet Banking. <br />
            - Cách 4: Thanh toán qua các ví điện tử (MoMo, ZaloPay, ShopeePay,
            VNPay). <br />
            TEELAB sẽ xác nhận việc đặt hàng với Quý khách bằng hình thức nhắn
            tin qua số điện thoại hoặc gửi thông tin qua email Quý khách cung
            cấp. <br />
          </span>
        </div>
      </div>
    </>
  );
};

export default ServicePaymentMethods;
