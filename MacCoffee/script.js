/* MacCoffee HT01642 — 3-file static HTML demo. All screen mappings can be edited below. */
const A = 'assets/app/';
const W = 'assets/web/';

// Keep the App explanation beside the phone, directly below the screen title.
const appPanelNode = document.querySelector('.app-panel');
const phoneStageNode = appPanelNode?.querySelector('.phone-stage');
const appProcessNode = document.getElementById('appProcess');
if (appPanelNode && phoneStageNode && appProcessNode) {
  const appContentLayout = document.createElement('div');
  appContentLayout.className = 'app-content-layout';
  phoneStageNode.before(appContentLayout);
  appContentLayout.append(appProcessNode, phoneStageNode);
}
const ref = (file, title, source = '') => ({src:W+file+'.png', title, source, kind:'reference'});
const macWeb = (file, title) => ({src:W+file+'.png', title, source:'', kind:'maccoffee'});
const sup = (file, title) => ({src:W+'sup-'+file+'.png', title, source:'Food Empire · thiết kế Dashboard SUP', kind:'design'});
const missing = (title, filename) => ({src:filename||'assets/web/bo-sung.png', title, source:'Ảnh Web đang chờ bổ sung', filename:filename||'assets/web/bo-sung.png', kind:'missing'});
const step = (title, web, app, summary, webText, appText, nextText, options={}) => ({ title, web, app:A+app+'.png'+(app==='noidungdaotao'?'?v=20261026-training':''), appTitle: options.appTitle||title, summary, webText, appText, nextText, phase:options.phase||'Web → App', caution:options.caution||'' });

const STAFF = [
 {name:'Trang chủ & đào tạo', summary:'Thiết lập người dùng và truy cập các chức năng từ App.', pages:[
   step('Trang chủ nhân viên',ref('user-list','Cấu hình vận hành → UserList'),'staff-home','Từ Web quản lý tài khoản, nhân viên mở App để truy cập chức năng hằng ngày.','UserList hỗ trợ tra cứu, phân loại và quản lý tài khoản nhân viên.','Trang chủ App có lối vào Lịch làm việc, Đào tạo, Quicktest, Báo cáo và Thư viện hình.','UserList là cấu hình người dùng, không phải một màn hình báo cáo SUP.'),
   step('Nội dung đào tạo',missing('Thiết lập nội dung đào tạo','assets/web/staff-training.png'),'noidungdaotao','Nhân viên truy cập chương trình đào tạo, tiếp tục khóa học và theo dõi tiến độ trên App.','Màn hình thiết lập hoặc phân phối nội dung đào tạo trên Web chưa được cung cấp.','App hiển thị khóa học nổi bật, tiến độ, danh sách bài học và các khóa học khác.','Nhân viên chọn bài học hoặc tiếp tục khóa học đang thực hiện.')
 ]},
 {name:'Lịch & phân ca', summary:'Cấu hình ca, phân công cửa hàng và các yêu cầu phát sinh.', pages:[
   step('Danh sách loại ca',ref('shift-list','Cấu hình vận hành → Shift List'),'staff-schedule','Ca được cấu hình trên Web là dữ liệu nền cho lịch làm việc trên App.','Shift List có mã ca, tên ca, giờ bắt đầu và kết thúc, trạng thái Active.','App hiển thị lịch làm việc của nhân viên.','Shift List chỉ là cấu hình loại ca, chưa thể hiện ai được phân ca vào ngày nào.',{caution:'Ảnh Web Shift List không phải màn hình phân ca cụ thể cho từng nhân viên.'}),
   step('Chỉnh sửa loại ca',ref('shift-edit','Shift List → Update · Chỉnh sửa loại ca'),'staff-schedule',
     'Web chỉnh tên ca, mã ca, giờ bắt đầu và giờ kết thúc; App hiển thị lịch làm việc.',
     'Hộp thoại Update thể hiện mã CS1, Ca sáng 1, từ 08:00 đến 12:00 và trạng thái Active.',
     'Nhân viên xem lịch làm việc trên App; ảnh không chứng minh ca vừa sửa được cập nhật tức thì.',
     'Thao tác chỉnh sửa cấu hình ca trên Web.'),
   step('Phân công điểm bán',ref('user-shop','Cấu hình vận hành → UserShop'),'staff-route','Gán nhân viên và cửa hàng trên Web, đối chiếu điểm làm việc trên App.','UserShop cho biết quản lý, nhân viên, cửa hàng, ngày áp dụng và danh sách gán.','Màn tuyến/điểm làm việc trên App giúp nhân viên biết địa điểm cần đến.','Ảnh Web và App hiện ở hai bộ dữ liệu khác nhau nên không mặc định cùng một nhân viên hoặc điểm bán.'),
   step('Thời gian phân công điểm bán',ref('user-shop-dates','UserShop · Ngày áp dụng'),'staff-route',
     'Gán cửa hàng cho nhân viên theo thời gian áp dụng trên Web.',
     'Ảnh UserShop cho thấy cửa hàng được chọn và lịch chọn ngày bắt đầu / kết thúc.',
     'App thể hiện thông tin tuyến và điểm làm việc cho nhân viên.',
     'Ảnh Web và App minh họa hai góc nhìn, chưa đối chiếu cùng một bản ghi.'),
   step('Lịch làm việc tháng',macWeb('assign-schedule','Web MacCoffee → Lịch làm việc tháng'),'staff-monthly-calendar','Web minh họa lịch tháng theo nhân viên; App thể hiện lịch cá nhân.','Lịch Web có bộ lọc nhân viên, các ca trong tháng và thống kê thời gian làm việc.','App hiển thị lịch tháng, ca đăng ký, ca hoàn thành và tình trạng liên quan.','Nếu không có Web phân ca riêng, cần xác nhận cơ chế lập lịch thực tế.'),
   step('Lịch làm việc',macWeb('assign-schedule','Web MacCoffee → Lịch làm việc tháng'),'staff-daily-schedule','Lịch làm việc giúp nhân viên theo dõi ca và điểm làm việc.','Web minh họa lịch tháng theo nhân viên và điểm bán.','Nhân viên xem lịch trong ngày trên App và có thể vào thông tin ca.','Luồng mô phỏng dựa vào loại ca; chưa xác nhận dữ liệu đồng bộ của cùng một lịch.'),
   step('Chi tiết ca làm',ref('shift-list','Cấu hình vận hành → Shift List'),'staff-shift-detail','Ca làm có thông tin giờ, địa điểm và tình trạng.','Ảnh Web ghi nhận tên/mã ca và khung giờ được cấu hình.','App hiển thị ca cụ thể được giao cho nhân viên.','Cần ảnh Web phân công nhân sự để đối chiếu cùng một ca.'),
   step('Đăng ký ca',missing('Web nhận yêu cầu đăng ký ca','assets/web/shift-requests.png'),'staff-register-shift','Nhân viên thao tác đăng ký ca trên App; vị trí Web tiếp nhận chưa xác định.','Chưa có ảnh màn hình yêu cầu đăng ký ca trên Web.','Nhân viên lựa chọn ca phù hợp và gửi yêu cầu từ điện thoại.','Cần sếp chỉ đúng màn hình Web duyệt hoặc quản lý yêu cầu.'),
   step('Ca đã duyệt',missing('Web duyệt ca','assets/web/approved-shifts.png'),'staff-approved-schedule','Sau khi yêu cầu được xác nhận, nhân viên xem lịch đã duyệt.','Màn hình Web duyệt ca chưa được cung cấp.','App thể hiện ca được phê duyệt.','Không tự suy ra chức năng duyệt từ Shift List.'),
   step('Đổi ca',missing('Web tiếp nhận đổi ca','assets/web/change-shift.png'),'staff-change-shift','Nhân viên gửi yêu cầu thay đổi ca từ App.','Chưa xác định trang Web nhận và phê duyệt đổi ca.','Ảnh App thể hiện biểu mẫu đổi ca.','Đây là một thao tác App có thật trong file thiết kế; Web liên quan vẫn cần xác minh.'),
   step('Các yêu cầu của tôi',missing('Danh sách yêu cầu trên Web','assets/web/staff-requests.png'),'staff-my-requests','Nhân viên theo dõi các yêu cầu đã gửi.','Chưa có ảnh Web danh sách yêu cầu.','App hiển thị danh sách yêu cầu cá nhân.','Nếu hệ thống không có trang Web riêng, cần thể hiện đúng cơ chế xử lý thực tế.'),
   step('Chi tiết yêu cầu',missing('Chi tiết yêu cầu trên Web','assets/web/staff-request-detail.png'),'staff-request-detail','Nhân viên theo dõi tình trạng và nội dung một yêu cầu.','Chưa có ảnh Web xử lý một yêu cầu cụ thể.','App cho xem thông tin yêu cầu đã gửi.','Cần thống nhất người duyệt và trạng thái dùng trong demo.'),
   step('Thông báo yêu cầu',ref('notifications','System → notification'),'staff-request-notification','Trạng thái yêu cầu có thể được thông báo về điện thoại.','System → notification là màn quản lý thông báo, hiện bảng đang trống.','App có màn thông báo về yêu cầu.','Chưa chứng minh đây là một thông báo cụ thể do Web vừa gửi.',{caution:'Ảnh FoodEmpire System → notification không có bản ghi nên chỉ minh họa cấu hình/thao tác.'}),
   step('Xin nghỉ phép',missing('Web duyệt nghỉ phép','assets/web/leave-requests.png'),'staff-leave-request','Nhân viên gửi yêu cầu nghỉ phép trên App.','Chưa có ảnh Web xem hoặc duyệt nghỉ phép.','App thể hiện nội dung và trạng thái của yêu cầu nghỉ.','Cần xác nhận trang tiếp nhận và xử lý nghỉ phép.')
 ]},
 {name:'Quick Test đầu ca', summary:'Thiết lập bài test, làm bài trên App và tra kết quả trên Web.', pages:[
   step('Danh sách Quick Test',ref('quicktest-overview','Cấu hình vận hành → Exam List'),'staff-quiz-start','Web thiết lập bài kiểm tra; App cho nhân viên bắt đầu làm bài.','Ảnh Exam List cho thấy bài kiểm tra, thời gian áp dụng và số câu hỏi.','App hiển thị giao diện bắt đầu Quick Test.','Kết quả được tra tại Report → Exam result. Các ảnh có thể thuộc bộ bài test khác nhau.',{phase:'Web thiết lập → App làm bài'}),
   step('Câu hỏi Quick Test',ref('exam-questions','Cấu hình vận hành → Exam List · Chi tiết câu hỏi'),'staff-quiz-answered','Thiết lập đáp án trên Web và xem cách nhân viên trả lời trên App.','Web hiển thị câu hỏi, lựa chọn đáp án và nhóm đối tượng áp dụng.','App hiển thị các câu hỏi trắc nghiệm nhân viên đang thực hiện.','Ảnh Web là dữ liệu Vinamilk; App là thiết kế MacCoffee nên câu hỏi không trùng nội dung.'),
   step('Kết quả hoàn thành',ref('exam-result','Report → Exam result'),'staff-quiz-success','Sau khi nộp bài, kết quả có thể được theo dõi trên Web báo cáo.','Exam result có người làm, tên bài, thời điểm và lịch sử lượt thực hiện.','App hiển thị trạng thái hoàn thành bài.','Đây là hai ví dụ khác dữ liệu, không khẳng định là một lần làm bài cụ thể.',{phase:'App gửi kết quả → Web theo dõi'}),
   step('Làm lại bài test',ref('exam-result','Report → Exam result'),'staff-quiz-retry','App có màn làm lại khi kết quả chưa đạt; Web có lịch sử lượt làm.','Web cho thấy nhiều lượt làm bài trong báo cáo kết quả.','App thể hiện tình trạng cần làm lại.','Quy tắc làm lại phụ thuộc cấu hình bài kiểm tra thực tế.',{phase:'App làm lại → Web ghi nhận'})
 ]},
 {name:'Chấm công', summary:'Chấm công trên App và xem Timesheet/báo cáo trên Web.', pages:[
   step('Xác thực khuôn mặt',ref('attendant-red-regions','Report → Attendant'),'staff-checkin-face','Nhân viên chấm công từ điện thoại; Web dùng để tra cứu kết quả.','Attendant hiển thị danh sách check-in/check-out theo Khu vực A, Khu vực B và Khu vực C với giao diện đỏ đồng bộ.','App có bước nhận diện khuôn mặt trước khi ghi nhận chấm công.','Đối chiếu thời gian, hình ảnh và khu vực làm việc của từng bản ghi.',{phase:'App chấm công → Web kết quả'}),
   step('Tổng hợp chấm công',ref('timesheet','Report → Timesheet total'),'staff-checkin-face','Web theo dõi dữ liệu chấm công theo lịch/tháng.','Timesheet total hiển thị danh sách nhân viên và lịch ngày trong tháng.','App là nơi nhân viên thực hiện chấm công.','Có thể dùng màn này để truyền tải luồng, nhưng không đồng nhất bản ghi App và Web.'),
   step('Thống kê hình ảnh',ref('attendance-profile-charts','Thống kê kết quả kiểm tra hình ảnh chấm công'),'staff-checkin-face','Web hỗ trợ thống kê trạng thái kiểm tra hình ảnh chấm công.','Biểu đồ phân loại kết quả khớp, không khớp, quét thất bại hoặc chưa quét.','Nhân viên thực hiện xác minh hình ảnh trên App.','Chỉ sử dụng số liệu trong ảnh như dữ liệu tham chiếu của FoodEmpire.')
 ]},
 {name:'Báo cáo số bán', summary:'Nhập số bán và xem báo cáo số bán.', pages:[
   step('Nhập báo cáo số bán',macWeb('form-setup','Report → SellOut PA'),'staff-sales-entry',
      'Nhập số lượng bán theo từng sản phẩm trên App hoặc tại màn tạo Sellout trên Web.',
      'Create Sellout có ngày, nhân viên, cửa hàng và cột nhập số lượng theo sản phẩm.',
      'App Nhân viên hiển thị các sản phẩm để nhập số bán.',
      'Dùng hình ảnh minh họa nhận diện MacCoffee; chưa kết nối dữ liệu thật.',{phase:'Nhập số bán'}),
   step('Xem báo cáo số bán',macWeb('form-result','Report → SellOut PA'),'staff-sales-dashboard',
      'Xem lại các báo cáo số bán theo thời gian, cửa hàng và nhân viên.',
      'Sellout PA có bộ lọc và bảng bản ghi gồm điểm bán, nhân viên, ngày và tổng số lượng.',
      'App có màn xem báo cáo doanh số.',
      'Các số liệu Web và App đang minh họa giao diện, không phải cùng một bản ghi.',{phase:'Xem báo cáo'})
 ]},
 {name:'Thông báo & tài liệu', summary:'Thông báo từ Web và các điểm truy cập nội dung trên App.', pages:[
   step('Quản lý thông báo',ref('notifications','System → notification'),'staff-notifications','Web quản lý thông báo và App hiển thị nội dung cho nhân viên.','Trong menu System, chọn notification để xem bộ lọc, danh sách thông báo và nút Tạo.','App có màn danh sách thông báo.','Màn hình Web là màn quản lý thông báo, không phải một thông báo đã gửi thật.',{caution:'Màn Web hiện đang trống nên mới minh họa cấu hình và thao tác quản lý.'}),
   step('Tài liệu & thư viện',missing('Web tài liệu / Thư viện hình','assets/web/library.png'),'thuvienhinhanh','App Trang chủ có lối vào Tài liệu và Thư viện hình.','Chưa có ảnh Web quản lý tài liệu/media.','Ảnh Trang chủ hiển thị các điểm vào chức năng, không phải màn hình chi tiết.','Bổ sung nếu hệ thống thực tế có chức năng Web quản lý tài liệu.',{caution:'Chưa có thiết kế chi tiết App cho Tài liệu và Thư viện hình.'})
 ]}
];

const MANAGER = [
 {name:'Dashboard SUP', summary:'Bốn ảnh thiết kế Dashboard SUP đã được ghép theo đúng nội dung.', pages:[
   step('Tổng quan',sup('overview','Dashboard SUP · Tổng quan'),'manager-home','Góc nhìn tổng quan dành cho quản lý khu vực trên Web và App.','Bản thiết kế SUP có tổng hợp chỉ số, hiệu quả hoạt động và các cảnh báo.','App quản lý mở Trang chủ để theo dõi tình hình đội ngũ.','Ảnh Web SUP là thiết kế được cung cấp, không phải dữ liệu từ FoodEmpire.',{phase:'Web báo cáo ↔ App quản lý'}),
   step('Báo cáo số bán',sup('sales','Dashboard SUP · Báo cáo số bán'),'manager-sales-today','Tổng hợp số bán trên Web, xem nhanh theo ngày trên App SUP.','Dashboard thiết kế có thẻ chỉ số và đồ thị doanh số theo mốc thời gian.','App quản lý có màn doanh số hôm nay.','Để minh họa MTD/cửa hàng, chuyển sang nhóm Báo cáo doanh số.'),
   step('Báo cáo nhân sự',sup('people','Dashboard SUP · Báo cáo nhân sự'),'manager-employee-list','Theo dõi nhân sự và đi vào danh sách nhân viên trên App.','Dashboard thiết kế có chỉ số và bảng/biểu đồ nhân sự.','App có màn danh sách nhân viên thuộc phạm vi quản lý.','Khi cần xem chi tiết từng người, chọn màn Chi tiết nhân viên.'),
   step('Báo cáo chấm công',sup('attendance','Dashboard SUP · Báo cáo chấm công'),'manager-attendance-missing','Theo dõi chấm công toàn đội ngũ trên Web và các trường hợp chưa chấm trên App.','Dashboard thiết kế có báo cáo chấm công và trạng thái đi làm.','App có màn danh sách chưa chấm công.','Dữ liệu hai ảnh minh họa không nhất thiết cùng một ngày / nhân viên.')
 ]},
 {name:'Báo cáo doanh số', summary:'Doanh số Hôm nay, MTD và các cửa hàng trong bộ App SUP.', pages:[
   step('Doanh số hôm nay',sup('sales','Dashboard SUP · Báo cáo số bán'),'manager-sales-today','So sánh tổng quan số bán Web và chi tiết nhanh trong App.','Web thiết kế hiển thị chỉ số và biểu đồ kết quả theo thời gian.','App có màn xem doanh số trong ngày.','Không khẳng định số liệu thiết kế Web khớp số liệu App.'),
   step('Doanh số MTD',sup('sales','Dashboard SUP · Báo cáo số bán'),'manager-sales-mtd','Đổi kỳ xem sang doanh số lũy kế tháng trên App.','Chưa có ảnh Web lọc đúng chế độ MTD; đang dùng tổng quan số bán.','App SUP có màn MTD.','Nên bổ sung trạng thái lọc MTD nếu Web thực tế hỗ trợ.',{caution:'Ảnh Web hiện không phải kết quả lọc MTD.'}),
   step('Hôm nay · Nguyễn Huệ',sup('sales','Dashboard SUP · Báo cáo số bán'),'manager-today-nguyen-hue','Đi từ báo cáo ngày sang kết quả chi tiết cửa hàng Nguyễn Huệ trên App.','Ảnh Web đang là dashboard số bán tổng hợp.','App cho thấy số bán của cửa hàng được chọn trong ngày.','Chưa có ảnh Web lọc riêng cửa hàng Nguyễn Huệ.'),
   step('Hôm nay · Cống Quỳnh',sup('sales','Dashboard SUP · Báo cáo số bán'),'manager-today-cong-quynh','Xem màn hình kết quả cửa hàng Cống Quỳnh trên App.','Ảnh Web đang là dashboard số bán tổng hợp.','App có chế độ xem kết quả ngày theo cửa hàng Cống Quỳnh.','Chưa có ảnh Web lọc riêng cửa hàng Cống Quỳnh.'),
   step('MTD · Nguyễn Huệ',sup('sales','Dashboard SUP · Báo cáo số bán'),'manager-mtd-nguyen-hue','Xem doanh số MTD theo cửa hàng Nguyễn Huệ.','Web thiết kế mới có dashboard tổng quan.','App có màn MTD của cửa hàng Nguyễn Huệ.','Bổ sung Web có bộ lọc MTD theo cửa hàng nếu cần đối chiếu chính xác.'),
   step('MTD · Cống Quỳnh',sup('sales','Dashboard SUP · Báo cáo số bán'),'manager-mtd-cong-quynh','Xem doanh số MTD theo cửa hàng Cống Quỳnh.','Web thiết kế mới có dashboard tổng quan.','App có màn MTD của cửa hàng Cống Quỳnh.','Bổ sung Web có bộ lọc MTD theo cửa hàng nếu cần đối chiếu chính xác.')
 ]},
 {name:'Nhân viên', summary:'Báo cáo nhân sự Web và màn hình danh sách/chi tiết App.', pages:[
   step('Danh sách nhân viên',sup('people','Dashboard SUP · Báo cáo nhân sự'),'manager-employee-list','Từ báo cáo nhân sự trên Web đi đến danh sách nhân viên ở App.','Web thiết kế SUP phản ánh tình hình nhân sự toàn đội ngũ.','App cho phép xem danh sách nhân viên.','UserList của Web Admin được chụp riêng, nhưng đó là cấu hình người dùng, không phải báo cáo SUP.'),
   step('Chi tiết nhân viên',sup('people','Dashboard SUP · Báo cáo nhân sự'),'manager-employee-detail','Từ tổng quan nhân sự đi sâu vào thông tin một người trên App.','Web thiết kế cung cấp góc nhìn tổng hợp, chưa có ảnh Web chi tiết nhân viên.','App có màn hình chi tiết nhân viên.','Nếu muốn đối chiếu một người ở cả Web và App, cần xin ảnh Web có bộ lọc/chi tiết nhân viên.')
 ]},
 {name:'Chấm công', summary:'Báo cáo tổng hợp SUP và kết quả chấm công tham chiếu.', pages:[
   step('Tình hình chấm công',sup('attendance','Dashboard SUP · Báo cáo chấm công'),'manager-attendance-missing','Xem chỉ số tổng hợp và danh sách nhân viên chưa chấm công.','Web thiết kế có báo cáo chấm công toàn đội ngũ.','App SUP có màn danh sách chưa chấm công.','Kết quả chi tiết FoodEmpire có thể xem ở các màn tham chiếu tiếp theo.'),
   step('Thống kê chấm công',ref('dashboard-attendant','Dashboard → DB Attendant'),'manager-attendance-missing','Tham chiếu biểu đồ tình hình chấm công theo ngày trên Web hiện có.','FoodEmpire DB Attendant có biểu đồ kế hoạch và thực tế trong kỳ lọc.','App SUP thể hiện trường hợp cần chú ý.','Web FoodEmpire khác dự án MacCoffee; số liệu không được coi là dữ liệu chung.'),
   step('Kiểm tra hình ảnh',ref('attendance-profile-charts','Báo cáo kiểm tra hình ảnh chấm công'),'manager-attendance-missing','Theo dõi tình trạng xác minh hình ảnh trên Web và tình trạng chưa chấm trên App.','Web báo cáo phân loại tình trạng ảnh chấm công.','App SUP xem nhân viên cần theo dõi.','Hai màn đang minh họa hai góc nhìn cùng chủ đề, không cùng bản ghi.')
 ]},
 {name:'Báo cáo nhanh', summary:'Báo cáo nhanh SUP và hai ảnh Web FoodEmpire để đối chiếu bố cục; dữ liệu khác dự án.', pages:[
   step('Báo cáo nhanh',sup('overview','Dashboard SUP · Tổng quan'),'manager-quick-report','Bản Web SUP hiển thị tổng quan, App có màn báo cáo nhanh.','Dashboard thiết kế tổng hợp các nhóm chỉ số quản lý.','App có màn báo cáo nhanh tương ứng.','Chưa có ảnh Web trang báo cáo nhanh riêng ngoài Dashboard tổng quan.'),
   step('Dashboard FoodEmpire (tham chiếu)',ref('activation-dashboard','FoodEmpire → Activation Dashboard'),'manager-home','Xem ảnh Dashboard FoodEmpire/Vinamilk đã chụp như một ví dụ bố cục Web khác; App đi kèm chỉ là Trang chủ quản lý MacCoffee.','Ảnh Web có nhãn Vinamilk và các nhóm số liệu Chấm công, Số bán, Tồn kho, Đổi quà và Mẫu thử. Đây KHÔNG phải Dashboard MacCoffee.','Màn App bên phải là Trang chủ quản lý MacCoffee, không kết nối với ảnh Web đang xem.','Bước này chỉ nhằm lưu và xem lại hình Web người dùng cung cấp, không được trình bày như một luồng dữ liệu thực tế.',{phase:'Web tham chiếu · không đồng bộ',caution:'Khác thương hiệu và khác dữ liệu: FoodEmpire/Vinamilk ≠ MacCoffee.'}),
   step('KPI Performance (tham chiếu)',ref('kpi-performance','Report → KPI Performance'),'manager-quick-report','Xem trang báo cáo KPI Performance mà bạn đã chụp; bảng hiện không có kết quả.','Ảnh Web hiển thị bộ lọc khu vực, nhân viên, thời gian và các cột Total Score, AVG Score nhưng hiện ghi No results found.','App MacCoffee minh họa góc nhìn Báo cáo nhanh, không có bằng chứng về một bản ghi KPI tương ứng.','Chỉ dùng để giới thiệu loại báo cáo và giao diện tìm kiếm, không suy diễn số liệu.',{phase:'Web tham chiếu · chưa có dữ liệu',caution:'Màn KPI Performance hiện chưa có dữ liệu và chưa xác nhận áp dụng cho MacCoffee.'})
 ]},
 {name:'Xuất – Nhập – Tồn', summary:'Màn hình tồn kho trên App có sẵn, Web tương ứng chưa được cung cấp.', pages:[
   step('Xuất – Nhập – Tồn',missing('Web báo cáo Xuất – Nhập – Tồn','assets/web/sup-inventory.png'),'manager-inventory','SUP theo dõi xuất, nhập, tồn trên App; chưa có ảnh màn báo cáo Web riêng.','Cần xin màn Web báo cáo tồn kho nếu hệ thống có.','App quản lý đã có màn Xuất – Nhập – Tồn từ bộ thiết kế gốc.','Không dùng tiêu đề Tồn kho trong Vinamilk Activation Dashboard để thay thế báo cáo chi tiết.',{caution:'Chưa có ảnh Web Xuất – Nhập – Tồn thực tế.'})
 ]}
];

// Nội dung diễn giải ngắn cho khách hàng. Chỉ sửa câu chữ; không đổi ảnh, chức năng hay luồng.
const FLOW_COPY = {
  'Trang chủ nhân viên': [
    'Web quản lý hồ sơ, App hiển thị mục tiêu, ca làm và chức năng cá nhân.',
    'UserList quản lý hồ sơ, vai trò, SUP và trạng thái nhân viên.',
    'Trang chủ hiển thị MTD 300/350, doanh số ngày 2 và sáu lối tắt nghiệp vụ.'
  ],
  'Nội dung đào tạo': [
    'Nhân viên truy cập nội dung đào tạo từ App.',
    'Màn hình thiết lập đào tạo đang chờ bổ sung.',
    'Xem khóa học nổi bật, tiến độ và danh sách bài học.'
  ],
  'Danh sách loại ca': [
    'Cấu hình ca làm trên Web để làm cơ sở lập lịch.',
    'Thiết lập tên ca, giờ bắt đầu và kết thúc.',
    'Xem lịch làm việc được phân công.'
  ],
  'Phân công điểm bán': [
    'Quản lý điểm bán và hướng dẫn nhân viên đến đúng địa điểm.',
    'Gán nhân viên với cửa hàng hoặc khu vực phụ trách.',
    'Xem tuyến và điểm làm việc.'
  ],
  'Chỉnh sửa loại ca': [
    'Web cập nhật cấu hình giờ ca; App hiển thị lịch làm việc.',
    'Chỉnh Ca sáng 1 (CS1), từ 08:00 đến 12:00, trạng thái Active.',
    'Xem ca làm việc được phân công trên App.'
  ],
  'Thời gian phân công điểm bán': [
    'Web gán điểm bán cho nhân viên cùng khoảng thời gian áp dụng.',
    'UserShop chọn nhân viên, cửa hàng và ngày bắt đầu/kết thúc.',
    'Xem thông tin điểm làm việc trên App.'
  ],
  'Lịch làm việc tháng': [
    'Nhân viên theo dõi lịch làm việc theo tháng.',
    'Web có lịch tháng theo nhân viên và điểm bán trong giao diện minh họa.',
    'Xem các ca làm và trạng thái trong tháng.'
  ],
  'Lịch làm việc': [
    'Nhân viên nắm rõ công việc được giao mỗi ngày.',
    'Web hiển thị lịch tháng với ngày, ca và điểm bán.',
    'Xem lịch làm việc hằng ngày.'
  ],
  'Chi tiết ca làm': [
    'Xem thông tin cụ thể của từng ca làm.',
    'Quản lý tên ca và khung giờ áp dụng.',
    'Xem giờ làm, địa điểm và thông tin ca.'
  ],
  'Đăng ký ca': [
    'Nhân viên chủ động gửi yêu cầu đăng ký ca.',
    'Màn hình tiếp nhận yêu cầu đang chờ bổ sung.',
    'Chọn ca và gửi đăng ký.'
  ],
  'Ca đã duyệt': [
    'Nhân viên theo dõi ca làm đã được xác nhận.',
    'Màn hình phê duyệt ca đang chờ bổ sung.',
    'Xem các ca đã được duyệt.'
  ],
  'Đổi ca': [
    'Nhân viên gửi yêu cầu thay đổi lịch làm.',
    'Màn hình xử lý đổi ca đang chờ bổ sung.',
    'Chọn ca cần đổi và gửi yêu cầu.'
  ],
  'Các yêu cầu của tôi': [
    'Theo dõi các yêu cầu đã gửi.',
    'Màn hình quản lý yêu cầu đang chờ bổ sung.',
    'Xem danh sách và trạng thái yêu cầu.'
  ],
  'Chi tiết yêu cầu': [
    'Tra cứu nội dung và tiến độ xử lý yêu cầu.',
    'Màn hình chi tiết yêu cầu đang chờ bổ sung.',
    'Xem thông tin và trạng thái xử lý.'
  ],
  'Thông báo yêu cầu': [
    'Thông báo giúp nhân viên cập nhật tình trạng công việc.',
    'Quản lý danh sách và nội dung thông báo.',
    'Xem thông báo về các yêu cầu.'
  ],
  'Xin nghỉ phép': [
    'Nhân viên gửi yêu cầu nghỉ phép trên App.',
    'Màn hình tiếp nhận nghỉ phép đang chờ bổ sung.',
    'Tạo và theo dõi yêu cầu nghỉ.'
  ],
  'Danh sách Quick Test': [
    'Thiết lập bài kiểm tra, nhân viên thực hiện trên App.',
    'Tạo bài kiểm tra và chọn đối tượng áp dụng.',
    'Mở bài Quick Test đầu ca.'
  ],
  'Câu hỏi Quick Test': [
    'Câu hỏi được cấu hình trên Web và hiển thị trên App.',
    'Quản lý câu hỏi và đáp án.',
    'Đọc câu hỏi, chọn câu trả lời.'
  ],
  'Kết quả hoàn thành': [
    'Nhân viên hoàn thành bài kiểm tra, quản lý theo dõi kết quả.',
    'Xem lịch sử và kết quả làm bài.',
    'Xem trạng thái hoàn thành Quick Test.'
  ],
  'Làm lại bài test': [
    'Nhân viên thực hiện lại bài kiểm tra khi cần.',
    'Theo dõi số lượt làm bài.',
    'Xem yêu cầu và thực hiện lại bài test.'
  ],
  'Xác thực khuôn mặt': [
    'Nhân viên chấm công trên App, quản lý theo dõi trên Web.',
    'Tra cứu tình trạng chấm công theo nhân viên và thời gian.',
    'Xác thực khuôn mặt để chấm công.'
  ],
  'Tổng hợp chấm công': [
    'Quản lý theo dõi chấm công của đội ngũ.',
    'Xem bảng công theo nhân viên và ngày làm việc.',
    'Thực hiện chấm công trong ca.'
  ],
  'Thống kê hình ảnh': [
    'Theo dõi kết quả kiểm tra ảnh chấm công.',
    'Thống kê các trạng thái xác minh hình ảnh.',
    'Chụp ảnh để thực hiện xác thực.'
  ],
  'Cấu hình biểu mẫu': [
    'Chuẩn bị biểu mẫu để nhân viên nhập báo cáo số bán.',
    'Quản lý biểu mẫu khảo sát; cần xác nhận mẫu số bán.',
    'Nhập sản phẩm và số lượng bán.'
  ],
  'Nhập số bán trên App': [
    'Nhân viên nhập số lượng bán tại điểm làm việc.',
    'Chuẩn bị biểu mẫu và phạm vi áp dụng trên Web.',
    'Chọn sản phẩm, nhập số lượng rồi gửi báo cáo.'
  ],
  'Gửi & xem kết quả': [
    'Nhân viên gửi số bán, quản lý tra cứu báo cáo.',
    'Xem danh sách và bộ lọc kết quả biểu mẫu.',
    'Theo dõi báo cáo số bán trên App.'
  ],
  'Lọc báo cáo số bán': [
    'Tìm nhanh số liệu theo nhu cầu theo dõi.',
    'Lọc kết quả theo thời gian và nhân viên.',
    'Lọc báo cáo theo các tiêu chí có sẵn.'
  ],
  'Quản lý thông báo': [
    'Quản lý thông báo trên Web, nhân viên xem trên App.',
    'Soạn tiêu đề, nội dung, ảnh và xem trước bản tin trên Web.',
    'Xem thông báo trên điện thoại.'
  ],
  'Tài liệu & thư viện': [
    'Nhân viên truy cập tài liệu và hình ảnh phục vụ công việc.',
    'Màn hình quản lý tài liệu đang chờ bổ sung.',
    'Mở Tài liệu hoặc Thư viện hình từ trang chủ.'
  ],
  'Tổng quan': [
    'Quản lý nắm nhanh tình hình hoạt động của đội ngũ.',
    'Theo dõi các chỉ số tổng quan của khu vực.',
    'Xem tình hình đội ngũ trên trang chủ.'
  ],
  'Báo cáo số bán': [
    'Theo dõi doanh số và kết quả bán hàng.',
    'Xem số bán tổng hợp qua biểu đồ và chỉ số.',
    'Xem doanh số trong ngày.'
  ],
  'Báo cáo nhân sự': [
    'Theo dõi nhân sự trong phạm vi quản lý.',
    'Xem báo cáo tổng hợp tình hình nhân viên.',
    'Xem danh sách nhân viên phụ trách.'
  ],
  'Báo cáo chấm công': [
    'Nắm tình hình chấm công của toàn đội ngũ.',
    'Xem thống kê và trạng thái chấm công.',
    'Theo dõi nhân viên chưa chấm công.'
  ],
  'Doanh số hôm nay': [
    'Theo dõi kết quả bán hàng trong ngày.',
    'Xem chỉ số và xu hướng doanh số.',
    'Xem doanh số hôm nay.'
  ],
  'Doanh số MTD': [
    'Theo dõi doanh số lũy kế trong tháng.',
    'Xem báo cáo số bán tổng hợp.',
    'Xem kết quả MTD.'
  ],
  'Hôm nay · Nguyễn Huệ': [
    'Xem doanh số trong ngày tại cửa hàng Nguyễn Huệ.',
    'Theo dõi doanh số tổng hợp.',
    'Xem kết quả cửa hàng Nguyễn Huệ.'
  ],
  'Hôm nay · Cống Quỳnh': [
    'Xem doanh số trong ngày tại cửa hàng Cống Quỳnh.',
    'Theo dõi doanh số tổng hợp.',
    'Xem kết quả cửa hàng Cống Quỳnh.'
  ],
  'MTD · Nguyễn Huệ': [
    'Theo dõi doanh số tháng tại cửa hàng Nguyễn Huệ.',
    'Xem báo cáo số bán tổng hợp.',
    'Xem kết quả MTD cửa hàng Nguyễn Huệ.'
  ],
  'MTD · Cống Quỳnh': [
    'Theo dõi doanh số tháng tại cửa hàng Cống Quỳnh.',
    'Xem báo cáo số bán tổng hợp.',
    'Xem kết quả MTD cửa hàng Cống Quỳnh.'
  ],
  'Danh sách nhân viên': [
    'Quản lý nhanh danh sách nhân sự phụ trách.',
    'Xem các chỉ số nhân sự tổng hợp.',
    'Tra cứu danh sách nhân viên.'
  ],
  'Chi tiết nhân viên': [
    'Đi sâu vào thông tin của một nhân viên.',
    'Xem tổng quan nhân sự của đội ngũ.',
    'Mở hồ sơ và kết quả làm việc của nhân viên.'
  ],
  'Tình hình chấm công': [
    'Theo dõi nhân viên đã chấm công và chưa chấm công.',
    'Xem báo cáo chấm công của đội ngũ.',
    'Xem danh sách nhân viên cần theo dõi.'
  ],
  'Thống kê chấm công': [
    'Theo dõi tình hình chấm công theo ngày.',
    'Xem biểu đồ chấm công trên Web tham chiếu.',
    'Xem các trường hợp chưa chấm công.'
  ],
  'Kiểm tra hình ảnh': [
    'Theo dõi kết quả xác minh ảnh chấm công.',
    'Xem thống kê hình ảnh chấm công.',
    'Xem các trường hợp cần kiểm tra.'
  ],
  'Báo cáo nhanh': [
    'Nắm nhanh những chỉ số cần quan tâm.',
    'Xem tình hình hoạt động tổng quan.',
    'Mở báo cáo nhanh trên điện thoại.'
  ],
  'Dashboard FoodEmpire (tham chiếu)': [
    'Tham khảo cách trình bày Dashboard Web.',
    'Ảnh FoodEmpire/Vinamilk chỉ minh họa giao diện.',
    'Trang chủ SUP thuộc thiết kế MacCoffee.'
  ],
  'KPI Performance (tham chiếu)': [
    'Tham khảo cách theo dõi kết quả KPI.',
    'Xem bộ lọc KPI trên Web FoodEmpire.',
    'Màn báo cáo nhanh của SUP MacCoffee.'
  ],
  'Xuất – Nhập – Tồn': [
    'Theo dõi tình hình hàng hóa tại điểm bán.',
    'Màn hình báo cáo tồn kho đang chờ bổ sung.',
    'Xem số liệu xuất, nhập và tồn kho.'
  ],
  'Nhập báo cáo số bán': [
    'Ghi nhận số lượng sản phẩm bán được.',
    'Web Create Sellout hiển thị ngày, nhân viên, cửa hàng và danh sách sản phẩm.',
    'Trên App, chọn sản phẩm và nhập số lượng bán.'
  ],
  'Xem báo cáo số bán': [
    'Tra cứu kết quả số bán đã ghi nhận.',
    'Web Sellout PA có các bộ lọc và bảng báo cáo theo nhân viên, điểm bán, thời gian.',
    'Trên App, xem báo cáo số bán.'
  ]
};

const FLOW_SUMMARY = {
  staff: {
    'Trang chủ & đào tạo':'Quản lý nhân viên trên Web, truy cập chức năng trên App.',
    'Lịch & phân ca':'Thiết lập ca làm và xem lịch trên điện thoại.',
    'Quick Test đầu ca':'Tạo bài kiểm tra, làm bài và theo dõi kết quả.',
    'Chấm công':'Nhân viên chấm công trên App, quản lý theo dõi trên Web.',
    'Báo cáo số bán':'Nhập báo cáo số bán và xem báo cáo số bán.',
    'Thông báo & tài liệu':'Quản lý thông báo và truy cập tài liệu làm việc.'
  },
  manager: {
    'Dashboard SUP':'Xem nhanh tình hình hoạt động của đội ngũ.',
    'Báo cáo doanh số':'Theo dõi doanh số theo thời gian và cửa hàng.',
    'Nhân viên':'Theo dõi nhân sự và xem thông tin chi tiết.',
    'Chấm công':'Xem tình trạng chấm công của đội ngũ.',
    'Báo cáo nhanh':'Tổng hợp những chỉ số quản lý quan trọng.',
    'Xuất – Nhập – Tồn':'Theo dõi hàng xuất, hàng nhập và lượng tồn kho.'
  }
};
const workSchedulePage = step(
  'Lịch làm việc',
  ref('work-schedule','Planning → Lịch làm việc'),
  'staff-schedule',
  'Web phân lịch theo tháng, nhân viên theo dõi lịch cá nhân trên App.',
  'Web hiển thị lịch tháng theo nhân viên, ca làm và điểm bán được phân công.',
  'App hiển thị lịch làm việc theo tháng, trạng thái ca và thông tin ca trong ngày.',
  'Đối chiếu lịch của nhân viên giữa Web và App.',
  {phase:'Web phân lịch → App xem lịch',appTitle:'Lịch làm việc'}
);

// Giữ nguyên toàn bộ hệ thống; riêng nhóm Lịch & phân ca chỉ hiển thị Lịch làm việc.
const STAFF_VISIBLE = STAFF.map(flow => flow.name === 'Lịch & phân ca'
  ? {...flow, pages:[workSchedulePage]}
  : flow
);
const FLOWS = {staff:STAFF_VISIBLE,manager:MANAGER};
// Các bước điều hướng Web–App trong trang demo; không gửi dữ liệu thật.
const SCENARIOS = [
  {id:'quick',name:'Quick Test',steps:[
    {name:'Thiết lập',role:'staff',flow:'Quick Test đầu ca',page:'Danh sách Quick Test',hint:'Web tạo bài kiểm tra'},
    {name:'Làm bài',role:'staff',flow:'Quick Test đầu ca',page:'Câu hỏi Quick Test',hint:'App nhân viên trả lời'},
    {name:'Xem kết quả',role:'staff',flow:'Quick Test đầu ca',page:'Kết quả hoàn thành',hint:'Web tra cứu lịch sử làm bài'}
  ]},
  {id:'schedule',name:'Lịch & phân ca',steps:[
    {name:'Xem lịch',role:'staff',flow:'Lịch & phân ca',page:'Lịch làm việc',hint:'App xem ca làm trong tháng'}
  ]},
  {id:'attendance',name:'Chấm công',steps:[
    {name:'App chấm công',role:'staff',flow:'Chấm công',page:'Xác thực khuôn mặt',hint:'Nhân viên thực hiện trên App'},
    {name:'Web theo dõi',role:'staff',flow:'Chấm công',page:'Tổng hợp chấm công',hint:'Tra bảng chấm công theo tháng'},
    {name:'SUP tổng hợp',role:'manager',flow:'Dashboard SUP',page:'Báo cáo chấm công',hint:'Quản lý xem tình hình đội ngũ'}
  ]},
  {id:'sales',name:'Báo cáo số bán',steps:[
    {name:'Nhập báo cáo',role:'staff',flow:'Báo cáo số bán',page:'Nhập báo cáo số bán',hint:'Nhập số lượng theo sản phẩm'},
    {name:'Xem báo cáo',role:'staff',flow:'Báo cáo số bán',page:'Xem báo cáo số bán',hint:'Lọc và xem báo cáo Sellout PA'}
  ]},
  {id:'notification',name:'Thông báo',steps:[
    {name:'Web & App thông báo',role:'staff',flow:'Thông báo & tài liệu',page:'Quản lý thông báo',hint:'Quản lý và xem thông báo'}
  ]}
];
const state = {role:'staff', mode:'dual', flow:0, page:0, zoom:1, kind:null};

const $ = x => document.getElementById(x);
const $$ = x => document.querySelectorAll(x);
const escapeHTML = s => String(s??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const selectedFlow = () => FLOWS[state.role][state.flow];
const selectedStep = () => selectedFlow().pages[state.page];
function getLocation(step){
  const flow=FLOWS[step.role].findIndex(f=>f.name===step.flow);
  if(flow<0)return null;
  const page=FLOWS[step.role][flow].pages.findIndex(p=>p.title===step.page);
  return page<0?null:{role:step.role,flow,page};
}
function activeScenario(){
  const current=selectedStep();
  return SCENARIOS.find(sc=>sc.steps.some(s=>s.role===state.role && s.flow===selectedFlow().name && s.page===current.title)) || null;
}
function drawJourney(){
  const sc=activeScenario(),outer=$('journey');
  if(!sc){outer.hidden=true;return;}
  outer.hidden=false;
  $('journeyHeading').textContent='Quy trình · '+sc.name;
  $('journeySub').textContent='Chọn bước để xem Web và App tương ứng';
  const chosen=sc.steps.findIndex(q=>q.role===state.role && q.flow===selectedFlow().name && q.page===selectedStep().title);
  $('journeySteps').innerHTML=sc.steps.map((q,i)=>`<button class="journey-step ${i===chosen?'is-current':''}" type="button" data-journey="${sc.id}" data-journey-step="${i}" aria-current="${i===chosen?'step':'false'}"><span class="journey-index">${i+1}</span><span class="journey-label">${escapeHTML(q.name)}</span></button>`).join('');
  $('journeyNext').disabled=chosen===sc.steps.length-1;
  $('journeyNext').textContent=chosen===sc.steps.length-1?'Đã đến bước cuối':'Bước tiếp theo →';
}
function goJourney(id,idx){
  const sc=SCENARIOS.find(s=>s.id===id);if(!sc||!sc.steps[idx])return;
  const position=getLocation(sc.steps[idx]);if(!position)return;
  state.role=position.role;state.flow=position.flow;state.page=position.page;
  draw();
  // Bước trình chiếu chỉ chuyển ảnh thiết kế / ảnh tham chiếu, không ghi dữ liệu lên Web hay App.
}

/* Với chức năng chưa có ảnh Web thật: CHỈ mô tả nghiệp vụ nhìn thấy được trong App.
   Không tự dựng dữ liệu bảng, con số, tác vụ admin hoặc báo cáo không có trong tư liệu. */
const BUSINESS_WORKFLOWS = {
  "Trang chủ nhân viên": [
    "Web UserList: quản lý hồ sơ, vị trí và người phụ trách.",
    "Nhân viên mở Trang chủ trên App sau khi đăng nhập.",
    "Xem chỉ số cá nhân, ca hôm nay và chọn chức năng tác nghiệp."
  ],
  "Nội dung đào tạo": [
    "Từ Trang chủ App, chọn chức năng Đào tạo.",
    "Xem khóa học nổi bật và tiến độ khóa học hiện tại.",
    "Chọn bài học cần tiếp tục hoặc mở một khóa học khác."
  ],
  "Danh sách loại ca": [
    "Trên Shift List, xem danh sách mã ca và tên ca.",
    "Kiểm tra giờ bắt đầu, giờ kết thúc và trạng thái ca.",
    "Trên App, xem lịch làm việc cá nhân để đối chiếu thông tin ca."
  ],
  "Chỉnh sửa loại ca": [
    "Mở Shift List và chọn một ca để chỉnh sửa.",
    "Kiểm tra mã CS1, Ca sáng 1, khung 08:00–12:00 và Active.",
    "Trên App, xem lịch cá nhân và các ca được hiển thị."
  ],
  "Phân công điểm bán": [
    "Ở UserShop, chọn quản lý và nhân viên cần tra cứu.",
    "Xem cửa hàng được gán và thời gian áp dụng trên Web.",
    "Đối chiếu với màn tuyến/điểm làm việc trên App."
  ],
  "Thời gian phân công điểm bán": [
    "Trên UserShop, mở cửa hàng đang được gán.",
    "Xem ô Từ ngày, Đến ngày và lịch chọn ngày áp dụng.",
    "Trên App, xem phần tuyến và địa điểm làm việc được hiển thị."
  ],
  "Lịch làm việc tháng": [
    "Mở Lịch làm việc trên App.",
    "Chuyển sang lịch tháng và xem các ngày có ca.",
    "Kiểm tra trạng thái ca đăng ký, hoàn thành hoặc vắng."
  ],
  "Lịch làm việc": [
    "Trên Web, tham khảo loại ca đã cấu hình ở Shift List.",
    "Trên App, mở lịch công việc trong ngày.",
    "Xem thời gian và địa điểm của ca được hiển thị."
  ],
  "Chi tiết ca làm": [
    "Chọn một ngày/ca từ lịch làm việc trên App.",
    "Mở màn hình Chi tiết ca làm.",
    "Xem giờ bắt đầu, địa điểm và thông tin liên quan."
  ],
  "Đăng ký ca": [
    "Trên App, mở chức năng đăng ký ca.",
    "Chọn ngày và ca muốn đăng ký.",
    "Kiểm tra thông tin yêu cầu trước khi gửi."
  ],
  "Ca đã duyệt": [
    "Mở danh sách ca trên App.",
    "Chọn nhóm Ca đã duyệt.",
    "Đọc ngày, giờ và địa điểm trong từng ca được hiển thị."
  ],
  "Đổi ca": [
    "Trên App, mở Đề nghị đổi ca/đổi ngày.",
    "Chọn ca hoặc ngày hiện tại và phương án muốn thay đổi.",
    "Nhập lý do, kiểm tra biểu mẫu và gửi yêu cầu khi cần."
  ],
  "Các yêu cầu của tôi": [
    "Mở Các yêu cầu của tôi trên App.",
    "Xem danh sách các yêu cầu đã tạo.",
    "Chọn một yêu cầu để xem trạng thái và nội dung chi tiết."
  ],
  "Chi tiết yêu cầu": [
    "Mở một yêu cầu từ danh sách trên App.",
    "Đọc thời gian, nội dung và lý do yêu cầu.",
    "Theo dõi trạng thái đang được hiển thị trong chi tiết."
  ],
  "Thông báo yêu cầu": [
    "Mở mục Thông báo trên App.",
    "Chọn thông báo liên quan đến yêu cầu.",
    "Đọc nội dung và quay về danh sách yêu cầu khi cần."
  ],
  "Xin nghỉ phép": [
    "Trên App, chọn Xin nghỉ phép.",
    "Chọn ngày nghỉ và điền thông tin/lý do theo biểu mẫu.",
    "Xem lại yêu cầu trước khi gửi."
  ],
  "Danh sách Quick Test": [
    "Trên Web Exam List, chọn bài kiểm tra và xem thời gian áp dụng.",
    "Trên App, mở Trắc nghiệm nhanh để vào bài kiểm tra.",
    "Nhân viên bắt đầu làm bài từ màn hình App."
  ],
  "Câu hỏi Quick Test": [
    "Web Exam List hiển thị các câu hỏi và đáp án cấu hình.",
    "App hiển thị các câu hỏi và lựa chọn trả lời.",
    "Đối chiếu cấu trúc câu hỏi trên Web với màn làm bài trên App."
  ],
  "Kết quả hoàn thành": [
    "Nhân viên hoàn thành bài test trên App.",
    "App hiển thị kết quả hoặc trạng thái hoàn thành.",
    "Web Exam result có thể tra cứu tên bài, người làm và lịch sử lượt làm."
  ],
  "Làm lại bài test": [
    "Trên App, xem trạng thái làm bài chưa đạt/cần làm lại.",
    "Thực hiện lại nếu bài kiểm tra cho phép.",
    "Web Exam result cung cấp thông tin các lượt làm được ghi nhận."
  ],
  "Xác thực khuôn mặt": [
    "Trên App, vào Chấm công và mở bước xác thực khuôn mặt.",
    "Thực hiện thao tác theo hướng dẫn của màn hình App.",
    "Trên Web Attendant, dùng bộ lọc để tra cứu dữ liệu chấm công khi có."
  ],
  "Tổng hợp chấm công": [
    "Trên Web Timesheet total, chọn kỳ hoặc nhân viên.",
    "Xem bảng ngày công theo nhân viên.",
    "Đối chiếu với chức năng chấm công trên App."
  ],
  "Thống kê hình ảnh": [
    "Trên Web, chọn thống kê kiểm tra hình ảnh chấm công.",
    "Xem biểu đồ các trạng thái xác minh ảnh.",
    "Liên hệ với bước xác thực khuôn mặt ở App; dữ liệu không đồng nhất."
  ],
  "Cấu hình biểu mẫu": [
    "Trên Web, mở System → Form khảo sát.",
    "Xem chức năng tạo, sửa và phân quyền biểu mẫu.",
    "App có màn nhập số bán; chưa xác nhận dùng biểu mẫu Web này."
  ],
  "Nhập số bán trên App": [
    "Trên App, mở Báo cáo số bán.",
    "Xem danh sách sản phẩm và nhập số lượng theo biểu mẫu.",
    "Kiểm tra số liệu trước khi thực hiện thao tác gửi báo cáo."
  ],
  "Gửi & xem kết quả": [
    "App có màn theo dõi báo cáo số bán.",
    "Ở Web Form result, chọn thời gian, tiêu đề và bộ lọc cần xem.",
    "Chuyển giữa Kết quả chi tiết và Thống kê để kiểm tra báo cáo."
  ],
  "Lọc báo cáo số bán": [
    "Trên App, mở bộ lọc báo cáo.",
    "Chọn các tiêu chí hiển thị theo giao diện thiết kế.",
    "Trên Web Form result có bộ lọc riêng; hai bộ lọc chưa xác nhận giống nhau."
  ],
  "Quản lý thông báo": [
    "Trên Web System → notification, xem bộ lọc và nút Tạo.",
    "Chức năng Gửi đi nằm trên trang quản lý thông báo.",
    "Trên App, nhân viên mở danh sách thông báo để xem nội dung."
  ],
  "Tài liệu & thư viện": [
    "Trên App Trang chủ, tìm Tài liệu và Thư viện hình.",
    "Chọn chức năng cần truy cập từ lối tắt.",
    "Hai lối tắt được hiển thị trên Trang chủ App."
  ],
  "Tổng quan": [
    "Chọn Dashboard SUP trên Web để xem tổng quan đội ngũ.",
    "Quan sát các nhóm chỉ số trong bản thiết kế Dashboard.",
    "Trên App SUP, mở Trang chủ để theo dõi thông tin quản lý."
  ],
  "Báo cáo số bán": [
    "Trên Web SUP, chọn báo cáo số bán của Dashboard.",
    "Xem chỉ số và biểu đồ tổng hợp trong thiết kế.",
    "Trên App SUP, mở Doanh số hôm nay."
  ],
  "Báo cáo nhân sự": [
    "Trên Web SUP, mở báo cáo nhân sự.",
    "Xem chỉ số và biểu đồ tổng hợp đội ngũ.",
    "Trên App SUP, vào Danh sách nhân viên để xem từng người."
  ],
  "Báo cáo chấm công": [
    "Trên Web SUP, mở báo cáo chấm công.",
    "Quan sát các chỉ số và tình trạng chấm công tổng hợp.",
    "Trên App SUP, xem danh sách nhân viên chưa chấm công."
  ],
  "Doanh số hôm nay": [
    "Chọn báo cáo số bán trên Dashboard SUP.",
    "Quan sát kết quả tổng hợp theo giao diện Web.",
    "Trên App SUP, mở Doanh số hôm nay."
  ],
  "Doanh số MTD": [
    "Trên App SUP, chuyển sang chế độ MTD.",
    "Xem chỉ số doanh số lũy kế trong tháng.",
    "Trên Web xem bức tranh doanh số chung."
  ],
  "Hôm nay · Nguyễn Huệ": [
    "Trên App SUP, mở doanh số hôm nay.",
    "Chọn cửa hàng Nguyễn Huệ.",
    "Xem kết quả chi tiết trong ngày của cửa hàng."
  ],
  "Hôm nay · Cống Quỳnh": [
    "Trên App SUP, mở doanh số hôm nay.",
    "Chọn cửa hàng Cống Quỳnh.",
    "Xem kết quả chi tiết trong ngày của cửa hàng."
  ],
  "MTD · Nguyễn Huệ": [
    "Trên App SUP, chuyển sang doanh số MTD.",
    "Chọn cửa hàng Nguyễn Huệ.",
    "Xem kết quả lũy kế tháng của cửa hàng."
  ],
  "MTD · Cống Quỳnh": [
    "Trên App SUP, chuyển sang doanh số MTD.",
    "Chọn cửa hàng Cống Quỳnh.",
    "Xem kết quả lũy kế tháng của cửa hàng."
  ],
  "Danh sách nhân viên": [
    "Trên Dashboard SUP, chọn nhóm báo cáo nhân sự.",
    "Quan sát số liệu tổng hợp trong thiết kế Web.",
    "Mở Danh sách nhân viên trên App SUP."
  ],
  "Chi tiết nhân viên": [
    "Trên App SUP, vào danh sách nhân viên.",
    "Chọn một nhân viên để mở chi tiết.",
    "Xem thông tin và các chỉ số có trên màn chi tiết."
  ],
  "Tình hình chấm công": [
    "Trên Web SUP, mở báo cáo chấm công.",
    "Xem số liệu tổng quan của đội ngũ.",
    "Trên App SUP, mở mục nhân viên chưa chấm công."
  ],
  "Thống kê chấm công": [
    "Trên Web tham chiếu, mở Dashboard → DB Attendant.",
    "Dùng bộ lọc để xem biểu đồ kế hoạch và thực tế.",
    "App SUP có màn danh sách nhân viên chưa chấm công."
  ],
  "Kiểm tra hình ảnh": [
    "Trên Web tham chiếu, mở thống kê kiểm tra hình ảnh.",
    "Xem phân loại khớp, không khớp, lỗi quét hoặc chưa quét.",
    "Trên App SUP, theo dõi nhóm nhân viên chưa chấm công."
  ],
  "Báo cáo nhanh": [
    "Trên Dashboard SUP, quan sát các nhóm chỉ số tổng quan.",
    "Trên App, chọn Báo cáo nhanh.",
    "Xem các nội dung chính đang được thể hiện trên màn App."
  ],
  "Dashboard FoodEmpire (tham chiếu)": [
    "Mở ảnh Activation Dashboard của FoodEmpire/Vinamilk.",
    "Quan sát nhóm Chấm công, Số bán, Tồn kho, Đổi quà, Mẫu thử.",
    "Đối chiếu bố cục các khối báo cáo; không sử dụng số liệu này cho MacCoffee."
  ],
  "KPI Performance (tham chiếu)": [
    "Trên Web FoodEmpire, mở Report → KPI Performance.",
    "Xem bộ lọc và bảng chỉ số KPI; ảnh đang không có bản ghi.",
    "Trên App SUP, xem Báo cáo nhanh bằng màn hình thiết kế MacCoffee."
  ],
  "Xuất – Nhập – Tồn": [
    "Trên App SUP, mở Xuất – Nhập – Tồn.",
    "Xem tổng nhập, đã bán và số lượng còn tồn.",
    "Lọc hoặc xem chi tiết theo những tùy chọn có trên App."
  ],

  'Nhập báo cáo số bán': [
    'Trên Web Create Sellout, xem ngày, nhân viên, cửa hàng và danh sách sản phẩm.',
    'Trên App, nhân viên nhập số lượng bán theo từng sản phẩm.',
    'Kiểm tra số lượng trước khi hoàn tất báo cáo.'
  ],
  'Xem báo cáo số bán': [
    'Trên Web, vào Report → SellOut PA và chọn bộ lọc cần xem.',
    'Xem danh sách báo cáo theo cửa hàng, nhân viên, thời gian và tổng số lượng.',
    'Trên App, nhân viên mở màn Xem báo cáo số bán.'
  ]
};


// Diễn giải thao tác trên App dựa trên ảnh màn hình đã được cung cấp.
const APP_FLOW_COPY = {
  "Trang chủ nhân viên": [
    "Trang chủ hiển thị chỉ số cá nhân, lịch làm và các chức năng nhanh.",
    [
      "Xem doanh số MTD, doanh số ngày và địa điểm làm việc.",
      "Chọn Lịch làm việc, Trắc nghiệm nhanh hoặc Báo cáo để tiếp tục."
    ]
  ],
  "Nội dung đào tạo": [
    "App Đào tạo hiển thị khóa học và tiến độ học tập của nhân viên.",
    [
      "Mở mục Đào tạo và xem khóa học nổi bật.",
      "Tiếp tục bài học đang thực hiện hoặc chọn một khóa học khác."
    ]
  ],
  "Danh sách loại ca": [
    "Nhân viên xem thông tin ca trong lịch làm việc.",
    [
      "Mở Lịch làm việc từ Trang chủ.",
      "Xem ngày và các ca đang hiển thị trong lịch."
    ]
  ],
  "Chỉnh sửa loại ca": [
    "App thể hiện lịch làm việc; ảnh không phản ánh trực tiếp một lần cập nhật ca.",
    [
      "Vào Lịch làm việc trên điện thoại.",
      "Kiểm tra tên ca và thời gian thể hiện trên lịch."
    ]
  ],
  "Phân công điểm bán": [
    "App hiển thị danh sách điểm bán và tuyến đi.",
    [
      "Xem ngày, ca làm và tình trạng tuyến.",
      "Kiểm tra thứ tự điểm bán, giờ ghé và bản đồ tuyến.",
      "Sử dụng Lưu tuyến đi khi muốn lưu thứ tự hiển thị."
    ]
  ],
  "Thời gian phân công điểm bán": [
    "Nhân viên xem tuyến và địa điểm được hiển thị trên App.",
    [
      "Xem ca làm, ngày thực hiện và danh sách điểm bán.",
      "Mở phần bản đồ để theo dõi vị trí các điểm trên tuyến."
    ]
  ],
  "Lịch làm việc tháng": [
    "App hiển thị lịch tháng và tình trạng ca làm.",
    [
      "Xem số ca đăng ký, hoàn thành và vắng.",
      "Chọn ngày để xem thông tin ca được thể hiện."
    ]
  ],
  "Lịch làm việc": [
    "App cho biết lịch công việc trong ngày.",
    [
      "Mở Lịch làm việc để xem ngày cần làm.",
      "Đọc khung giờ và địa điểm làm việc của ca."
    ]
  ],
  "Chi tiết ca làm": [
    "App hiển thị thông tin của một ca làm cụ thể.",
    [
      "Chọn ca muốn xem từ lịch.",
      "Kiểm tra ngày, giờ, địa điểm và trạng thái ca."
    ]
  ],
  "Đăng ký ca": [
    "Nhân viên điền thông tin để đăng ký ca.",
    [
      "Chọn ngày và ca theo các trường có trên màn hình.",
      "Kiểm tra lựa chọn trước khi gửi yêu cầu."
    ]
  ],
  "Ca đã duyệt": [
    "App hiển thị các ca đã được xác nhận.",
    [
      "Mở mục Ca đã duyệt.",
      "Xem ngày, khung giờ và nơi làm việc."
    ]
  ],
  "Đổi ca": [
    "App có biểu mẫu đề nghị đổi ca hoặc đổi ngày.",
    [
      "Chọn ca/ngày hiện tại và ca/ngày muốn đổi.",
      "Nhập lý do và xem lại nội dung trước khi gửi yêu cầu."
    ]
  ],
  "Các yêu cầu của tôi": [
    "Nhân viên theo dõi các yêu cầu cá nhân.",
    [
      "Mở danh sách Các yêu cầu của tôi.",
      "Xem loại yêu cầu, ngày tạo và tình trạng hiện tại."
    ]
  ],
  "Chi tiết yêu cầu": [
    "App hiển thị nội dung chi tiết của yêu cầu.",
    [
      "Chọn một yêu cầu từ danh sách.",
      "Xem thông tin ca/ngày, lý do và trạng thái."
    ]
  ],
  "Thông báo yêu cầu": [
    "App thể hiện thông báo liên quan đến yêu cầu.",
    [
      "Mở mục Thông báo.",
      "Chọn thông báo để đọc nội dung và trạng thái."
    ]
  ],
  "Xin nghỉ phép": [
    "Nhân viên khai báo yêu cầu nghỉ phép.",
    [
      "Chọn ngày nghỉ trong biểu mẫu.",
      "Điền lý do, kiểm tra và gửi yêu cầu nếu cần."
    ]
  ],
  "Danh sách Quick Test": [
    "App có màn mở bài kiểm tra đầu ca.",
    [
      "Mở Trắc nghiệm nhanh từ Trang chủ.",
      "Đọc tên bài và chọn bắt đầu khi sẵn sàng."
    ]
  ],
  "Câu hỏi Quick Test": [
    "App hiển thị câu hỏi và các phương án trả lời.",
    [
      "Đọc câu hỏi trên màn hình.",
      "Chọn đáp án và tiếp tục đến câu tiếp theo."
    ]
  ],
  "Kết quả hoàn thành": [
    "Nhân viên xem trạng thái bài kiểm tra sau khi làm.",
    [
      "Hoàn thành phần trả lời trên App.",
      "Xem kết quả và trạng thái hoàn thành được hiển thị."
    ]
  ],
  "Làm lại bài test": [
    "App có màn hình dành cho trường hợp cần làm lại.",
    [
      "Xem thông tin bài kiểm tra chưa đạt.",
      "Chọn làm lại nếu nút này được phép sử dụng."
    ]
  ],
  "Xác thực khuôn mặt": [
    "App thể hiện bước chụp/xác thực khuôn mặt khi chấm công.",
    [
      "Mở Chấm công tại ca làm việc.",
      "Thực hiện xác thực theo hướng dẫn trên màn hình."
    ]
  ],
  "Tổng hợp chấm công": [
    "Chức năng chấm công được thực hiện từ điện thoại.",
    [
      "Mở màn Chấm công.",
      "Thực hiện bước xác minh được App yêu cầu."
    ]
  ],
  "Thống kê hình ảnh": [
    "App thể hiện thao tác xác minh hình ảnh.",
    [
      "Mở bước xác thực khuôn mặt.",
      "Thực hiện thao tác theo hướng dẫn trên điện thoại."
    ]
  ],
  "Cấu hình biểu mẫu": [
    "App có màn hình nhập báo cáo số bán theo sản phẩm.",
    [
      "Chọn sản phẩm trong biểu mẫu số bán.",
      "Nhập số lượng theo trường dữ liệu hiển thị."
    ]
  ],
  "Nhập số bán trên App": [
    "Nhân viên khai báo số lượng sản phẩm đã bán.",
    [
      "Chọn hoặc kiểm tra sản phẩm cần báo cáo.",
      "Nhập số lượng và xem lại trước khi gửi."
    ]
  ],
  "Gửi & xem kết quả": [
    "App có màn hình theo dõi báo cáo số bán.",
    [
      "Mở mục Báo cáo trên điện thoại.",
      "Xem các chỉ số và thông tin thể hiện trong báo cáo."
    ]
  ],
  "Lọc báo cáo số bán": [
    "App có giao diện lọc báo cáo.",
    [
      "Mở bộ lọc từ phần Báo cáo.",
      "Chọn tiêu chí cần xem theo các lựa chọn hiển thị."
    ]
  ],
  "Quản lý thông báo": [
    "Nhân viên xem thông báo từ App.",
    [
      "Mở mục Thông báo trên điện thoại.",
      "Chọn thông báo để đọc nội dung chi tiết."
    ]
  ],
  "Tài liệu & thư viện": [
    "Trang chủ có lối vào Tài liệu và Thư viện hình.",
    [
      "Tìm hai chức năng trong nhóm lối tắt Trang chủ.",
      "Chọn mục cần truy cập; ảnh gốc chỉ hiển thị lối vào."
    ]
  ],
  "Tổng quan": [
    "Trang chủ SUP cung cấp thông tin tổng quan để theo dõi đội ngũ.",
    [
      "Mở Trang chủ của vai trò quản lý.",
      "Xem các chỉ số và mục chức năng hiện có."
    ]
  ],
  "Báo cáo số bán": [
    "SUP xem kết quả số bán trong ngày.",
    [
      "Mở báo cáo doanh số trên App SUP.",
      "Đọc các chỉ số và kết quả ngày hiển thị."
    ]
  ],
  "Báo cáo nhân sự": [
    "SUP có màn danh sách nhân viên đang quản lý.",
    [
      "Mở Danh sách nhân viên.",
      "Chọn nhân viên để xem thông tin chi tiết khi cần."
    ]
  ],
  "Báo cáo chấm công": [
    "SUP xem nhóm nhân viên chưa chấm công.",
    [
      "Mở mục chấm công trong App quản lý.",
      "Xem những nhân viên đang ở trạng thái chưa chấm công."
    ]
  ],
  "Doanh số hôm nay": [
    "App SUP có chế độ xem doanh số hôm nay.",
    [
      "Mở báo cáo doanh số.",
      "Xem các chỉ số theo ngày hiện tại."
    ]
  ],
  "Doanh số MTD": [
    "App SUP có chế độ xem doanh số lũy kế tháng.",
    [
      "Chuyển sang MTD.",
      "Xem kết quả bán hàng cộng dồn trong tháng."
    ]
  ],
  "Hôm nay · Nguyễn Huệ": [
    "App hiển thị doanh số ngày của cửa hàng Nguyễn Huệ.",
    [
      "Mở chế độ Hôm nay.",
      "Chọn cửa hàng Nguyễn Huệ để xem kết quả."
    ]
  ],
  "Hôm nay · Cống Quỳnh": [
    "App hiển thị doanh số ngày của cửa hàng Cống Quỳnh.",
    [
      "Mở chế độ Hôm nay.",
      "Chọn cửa hàng Cống Quỳnh để xem kết quả."
    ]
  ],
  "MTD · Nguyễn Huệ": [
    "App hiển thị doanh số MTD của cửa hàng Nguyễn Huệ.",
    [
      "Chuyển sang MTD.",
      "Chọn cửa hàng Nguyễn Huệ để xem kết quả lũy kế."
    ]
  ],
  "MTD · Cống Quỳnh": [
    "App hiển thị doanh số MTD của cửa hàng Cống Quỳnh.",
    [
      "Chuyển sang MTD.",
      "Chọn cửa hàng Cống Quỳnh để xem kết quả lũy kế."
    ]
  ],
  "Danh sách nhân viên": [
    "SUP xem danh sách nhân viên.",
    [
      "Mở Danh sách nhân viên trên App.",
      "Xem thông tin từng người trong phạm vi quản lý."
    ]
  ],
  "Chi tiết nhân viên": [
    "SUP xem thông tin chi tiết của một nhân viên.",
    [
      "Chọn nhân viên trong danh sách.",
      "Đọc thông tin cá nhân và các chỉ số có trong màn chi tiết."
    ]
  ],
  "Tình hình chấm công": [
    "SUP theo dõi tình hình chưa chấm công trên điện thoại.",
    [
      "Mở màn tình trạng chấm công.",
      "Đọc danh sách người chưa chấm công."
    ]
  ],
  "Thống kê chấm công": [
    "App SUP hiển thị danh sách chấm công cần theo dõi.",
    [
      "Mở màn Chưa chấm công.",
      "Xem tên và tình trạng từng nhân viên."
    ]
  ],
  "Kiểm tra hình ảnh": [
    "App SUP cho biết các trường hợp chưa chấm công.",
    [
      "Mở danh sách Chưa chấm công.",
      "Xem các trường hợp cần chú ý."
    ]
  ],
  "Báo cáo nhanh": [
    "App SUP cung cấp màn Báo cáo nhanh.",
    [
      "Mở chức năng Báo cáo nhanh.",
      "Xem các nhóm dữ liệu đang được hiển thị."
    ]
  ],
  "Dashboard FoodEmpire (tham chiếu)": [
    "App bên phải là thiết kế Trang chủ SUP của MacCoffee, độc lập ảnh Web FoodEmpire.",
    [
      "Mở Trang chủ quản lý MacCoffee.",
      "Xem các mục tổng quan của App, không đối chiếu số liệu với ảnh Web khác dự án."
    ]
  ],
  "KPI Performance (tham chiếu)": [
    "App minh họa phần Báo cáo nhanh MacCoffee, không phải kết quả KPI của FoodEmpire.",
    [
      "Mở Báo cáo nhanh trên App SUP.",
      "Xem các mục báo cáo hiện có trên giao diện App."
    ]
  ],
  "Xuất – Nhập – Tồn": [
    "App SUP thể hiện tình hình nhập, bán và tồn hàng.",
    [
      "Mở Xuất – Nhập – Tồn.",
      "Xem tổng nhập, đã bán và còn tồn theo các thông tin có trên màn hình."
    ]
  ],

  'Nhập báo cáo số bán': [
    'Nhân viên nhập số lượng sản phẩm đã bán trên App.',
    ['Mở mục Báo cáo số bán.', 'Nhập số lượng theo sản phẩm và kiểm tra trước khi gửi.']
  ],
  'Xem báo cáo số bán': [
    'Nhân viên theo dõi báo cáo số bán trên App.',
    ['Mở mục Báo cáo.', 'Xem thông tin số bán đã ghi nhận theo màn hình App.']
  ]
};

const SCREEN_EXPLAIN = {
  'Nội dung đào tạo': {
    title:'Đào tạo nhân viên', lead:'Nhân viên theo dõi và tiếp tục chương trình đào tạo trực tiếp trên App.',
    points:[['Trên App','Xem khóa học nổi bật, tiến độ và danh sách bài học.'],['Nội dung đào tạo','Kiến thức sản phẩm, kỹ năng bán hàng và bài kiểm tra cuối khóa.'],['Mục đích','Giúp nhân viên chủ động học tập và theo dõi mức độ hoàn thành.']]
  },
  'Lịch làm việc tháng': {
    title:'Lịch làm việc theo tháng', lead:'Nhân viên theo dõi các ca và tình trạng làm việc trong tháng.',
    points:[['Trên App','Xem ca đăng ký, hoàn thành và ca vắng theo tháng.'],['Thông tin cần quản lý','Ngày làm việc, khung giờ và địa điểm được giao.'],['Kết quả cần truyền tải','Nhân viên chủ động nắm lịch công việc của mình.']]
  },
  'Đăng ký ca': {
    title:'Đăng ký ca làm',lead:'Nhân viên chủ động chọn ca cần đăng ký trên App.',
    points:[['Trên App','Chọn ngày, ca làm và gửi đăng ký.'],['Thông tin của yêu cầu','Người đăng ký, thời gian, địa điểm.'],['Theo dõi','Nhân viên có thể xem lại trạng thái yêu cầu.']]
  },
  'Ca đã duyệt': {
    title:'Ca làm đã duyệt',lead:'Hiển thị các ca làm được xác nhận trong lịch cá nhân.',
    points:[['Trên App','Xem danh sách ca đã được duyệt.'],['Thông tin trọng tâm','Ngày làm, giờ làm và nơi làm việc.'],['Mục đích','Nhân viên biết ca nào đã được xác nhận.']]
  },
  'Đổi ca': {
    title:'Đề nghị đổi ca / đổi ngày',lead:'Nhân viên gửi yêu cầu đổi ca trực tiếp trên App.',
    points:[['Trên App','Chọn ca/ngày hiện tại và ca/ngày muốn đổi.'],['Thông tin của yêu cầu','Thời gian thay đổi và lý do.'],['Kết quả cần theo dõi','Trạng thái yêu cầu sau khi gửi.']]
  },
  'Các yêu cầu của tôi': {
    title:'Theo dõi yêu cầu',lead:'Các yêu cầu nhân viên đã gửi được tập hợp trong App.',
    points:[['Trên App','Xem danh sách các yêu cầu.'],['Nội dung chính','Loại yêu cầu, ngày gửi và trạng thái.'],['Mục đích','Giúp nhân viên theo dõi tiến độ xử lý.']]
  },
  'Chi tiết yêu cầu': {
    title:'Chi tiết yêu cầu',lead:'Xem cụ thể một yêu cầu đã tạo trên App.',
    points:[['Trên App','Mở yêu cầu để xem nội dung chi tiết.'],['Thông tin chính','Thời gian, nội dung, lý do và trạng thái.'],['Mục đích','Theo dõi thông tin của từng yêu cầu.']]
  },
  'Xin nghỉ phép': {
    title:'Yêu cầu nghỉ phép',lead:'Nhân viên khai báo thông tin nghỉ phép ngay trên App.',
    points:[['Trên App','Chọn ngày nghỉ, ca nghỉ và nhập lý do.'],['Thông tin cần quản lý','Người gửi, thời gian nghỉ, nội dung yêu cầu.'],['Theo dõi','Trạng thái đơn nghỉ của nhân viên.']]
  },
  'Tài liệu & thư viện': {
    title:'Tài liệu và Thư viện hình',lead:'Trang chủ App có lối truy cập Tài liệu và Thư viện hình.',
    points:[['Trên App','Hai lối tắt Tài liệu và Thư viện hình ở Trang chủ.'],['Thông tin cần tổ chức','Nội dung hướng dẫn và hình ảnh phục vụ công việc.'],['Mục đích','Giúp nhân viên tra cứu thông tin từ một nơi.']]
  },
  'Xuất – Nhập – Tồn': {
    title:'Báo cáo Nhập – Xuất – Tồn',lead:'App SUP hiển thị lượng hàng đã nhập, đã bán và còn tồn.',
    points:[['Tổng quan trên App','Đã nhập 320 · Đã bán 186 · Còn tồn 134 thùng.'],['Theo dõi chi tiết','Có bộ lọc thời gian, nhân viên và chỉ số tốc độ bán.'],['Giá trị quản lý','Nhận biết lượng hàng còn lại theo nhân viên.']]
  }
};
function getExplain(item){
  const fallback=SCREEN_EXPLAIN[item.title];
  return fallback || {
    title:item.title,
    lead:item.summary || 'Theo dõi thông tin nghiệp vụ trên ứng dụng.',
    points:[['Trên App',item.appText || item.appTitle],['Thông tin liên quan',item.webText || 'Xem và đối chiếu với chức năng quản lý.']]
  };
}
function renderMockWeb(item){
  const v=getExplain(item);
  return `<section class="explainer-web" aria-label="Nội dung nghiệp vụ theo màn hình App">
    <div class="explainer-heading">
      <span class="explainer-eyebrow">NỘI DUNG NGHIỆP VỤ</span>
      <h3>${escapeHTML(v.title)}</h3>
      <p>${escapeHTML(v.lead)}</p>
    </div>
    <div class="explainer-flow">${v.points.map(([label,desc],i)=>`<article class="explainer-step">
      <span class="explainer-index">${String(i+1).padStart(2,'0')}</span>
      <div><h4>${escapeHTML(label)}</h4><p>${escapeHTML(desc)}</p></div>
    </article>`).join('')}</div>
    <div class="explainer-end"><span aria-hidden="true">↗</span> Xem màn hình App bên cạnh để đối chiếu</div>
  </section>`;
}
function renderMissingWeb(item){
  const node=$('webMock');
  node.innerHTML=renderMockWeb(item);node.hidden=false;
  $('webImage').hidden=true;
  $('webPhotoStatus').textContent='Nội dung theo App';
  $('webScreenSource').textContent='Tóm tắt nghiệp vụ từ ảnh thiết kế';
  $('webScreenSource').hidden=false;
  $('webScreenName').textContent=getExplain(item).title;
  $('webPath').textContent='FoodEmpire / Tổng quan nghiệp vụ';
  $('expandWeb').disabled=false;
}
function draw(){
  const flow=selectedFlow(), item=selectedStep(), w=item.web;
  $$('[data-role]').forEach(b=>{const ok=b.dataset.role===state.role;b.classList.toggle('is-active',ok);b.setAttribute('aria-pressed',String(ok));});
  $$('[data-mode]').forEach(b=>{const ok=b.dataset.mode===state.mode;b.classList.toggle('is-active',ok);b.setAttribute('aria-pressed',String(ok));});
  $('workspace').className='workspace mode-'+state.mode+(flow.name==='Quick Test đầu ca'?' compact-web-view':'');
  drawJourney();
  $('flowNav').innerHTML=FLOWS[state.role].map((f,i)=>`<button type="button" data-flow="${i}" class="${i===state.flow?'is-active':''}" aria-current="${i===state.flow?'page':'false'}"><span class="flow-number">${i+1}.</span> ${escapeHTML(f.name)}</button>`).join('');
  $('screenNav').innerHTML=flow.pages.map((p,i)=>`<button type="button" data-page="${i}" class="${i===state.page?'is-active':''}" aria-pressed="${i===state.page}">${escapeHTML(p.title)}</button>`).join('');
  $('flowTitle').textContent=flow.name;
  $('flowSummary').textContent=FLOW_SUMMARY[state.role][flow.name] || flow.summary;
  $('webLabel').textContent=state.role==='staff'?(flow.name==='Báo cáo số bán'?'Web · Nhập & Xem Báo cáo số bán':'Web · Cấu hình & Theo dõi Nhân viên'):'Web · Báo cáo Quản lý/SUP';
  $('appLabel').textContent=state.role==='staff'?'Màn hình Mobile Nhân viên':'Màn hình Mobile Quản lý';
  $('appRole').textContent=state.role==='staff'?'NHÂN VIÊN':'QUẢN LÝ/SUP';
  $('webScreenName').textContent=w.title;
  $('webScreenSource').textContent=w.source;
  $('webScreenSource').hidden=!w.source;
  $('webPhotoStatus').textContent=w.kind==='missing'?'Giao diện demo':w.kind==='design'?'Thiết kế SUP':w.kind==='maccoffee'?'Giao diện minh họa':'Ảnh tham chiếu';
  $('webPhotoStatus').hidden=w.kind==='reference'||w.kind==='maccoffee';
  $('webCaptureInfo').classList.toggle('is-reference',w.kind==='reference');
  $('webCaptureInfo').classList.toggle('is-report',w.title.startsWith('Report →'));
  $('webPath').textContent=w.kind==='design'?'FoodEmpire / Dashboard SUP':(w.kind==='reference'||w.kind==='maccoffee')?'FoodEmpire / '+w.title:'FoodEmpire / Web Admin';
  $('appScreenName').textContent=item.appTitle;
  $('appScreenContext').textContent='Thiết kế App FoodEmpire';
  const webImage=$('webImage');
  const webMock=$('webMock');
  webMock.hidden=true;webMock.innerHTML='';
  const showActualImage=()=>{
    if(selectedStep()!==item)return;
    webImage.hidden=false;webMock.hidden=true;
    $('expandWeb').disabled=false;
    if(w.kind==='missing'){
      $('webPhotoStatus').textContent='Ảnh Web bổ sung';
      $('webScreenSource').textContent='Màn hình Web';
      $('webScreenSource').hidden=false;
      $('webPath').textContent='FoodEmpire / Web Admin';
    }
  };
  webImage.onload=showActualImage;
  webImage.onerror=()=>{if(selectedStep()!==item)return;renderMissingWeb(item);};
  webImage.hidden=true;
  $('expandWeb').disabled=false;
  if(w.kind==='missing'){
    renderMissingWeb(item);
  }
  if(w.src){
    webImage.src=w.src;
    if(webImage.complete && webImage.naturalWidth>0)showActualImage();
  } else renderMissingWeb(item);
  $('appImage').src=item.app;
  $('appImage').alt='App MacCoffee · '+item.appTitle;
  $('phoneViewport').scrollTop=0;
  $('webFrame').scrollTop=0;
  const content = FLOW_COPY[item.title] || [item.summary,item.webText,item.appText];
  const cleanCopy = text=>String(text||'')
    .replace(/Màn hình (Web )?(thiết lập |xử lý |tiếp nhận |phê duyệt |quản lý |chi tiết |phân lịch )?[^.]*đang chờ bổ sung\.?/gi,'Theo dõi và quản lý thông tin trên giao diện Web.')
    .replace(/Chưa có ảnh[^.]*\.?/gi,'Quản lý thông tin theo chức năng.')
    .replace(/Ảnh Shift List đã có không thể thay thế[^.]*\.?/gi,'Theo dõi lịch làm việc theo nhân viên.')
    .replace(/\bWeb đang chờ bổ sung\b/gi,'Web quản lý')
    .trim();
  $('detailTitle').textContent=item.title;
  $('detailLead').textContent=cleanCopy(content[0]);
  $('detailPhase').textContent=state.role==='staff'?'Web & App Nhân viên':'Web & App Quản lý';
  const demoWebText={
    'Nội dung đào tạo':'App hiển thị khóa học nổi bật, tiến độ học, danh sách bài học và các khóa học khác.',
    'Lịch làm việc tháng':'Theo dõi ca và trạng thái làm việc theo tháng trên App.',
    'Đăng ký ca':'Đăng ký ngày và ca làm trên App; thông tin yêu cầu được trình bày bên trên.',
    'Ca đã duyệt':'App hiển thị các ca làm đã được xác nhận.',
    'Đổi ca':'App cho phép chọn ca/ngày cần thay đổi và ghi lý do.',
    'Các yêu cầu của tôi':'App liệt kê các yêu cầu đã gửi và trạng thái.',
    'Chi tiết yêu cầu':'App hiển thị ngày, ca, lý do và tình trạng yêu cầu.',
    'Xin nghỉ phép':'App có biểu mẫu chọn ngày nghỉ và lý do.',
    'Tài liệu & thư viện':'Trang chủ App có lối vào Tài liệu và Thư viện hình.',
    'Xuất – Nhập – Tồn':'App SUP có tổng nhập, đã bán, còn tồn và các chỉ số theo nhân viên.'
  };
  const webCopy=w.kind==='missing'?(demoWebText[item.title]||cleanCopy(content[1])):cleanCopy(content[1]);
  $('detailCards').innerHTML=[['Trên Web',webCopy],['Trên App',cleanCopy(content[2])]].map(([title,desc])=>`<article class="detail-card"><h3>${escapeHTML(title)}</h3><p>${escapeHTML(desc)}</p></article>`).join('');
  $('businessSteps').innerHTML=(BUSINESS_WORKFLOWS[item.title] || []).map((description,index)=>`<li><span class="business-step-number">${index+1}</span><span class="business-step-text">${escapeHTML(description)}</span></li>`).join('');
  const appFlow=APP_FLOW_COPY[item.title] || [cleanCopy(content[2]), [cleanCopy(content[2])]];
  $('appFlowLead').textContent=appFlow[0];
  $('appFlowSteps').innerHTML=appFlow[1].map((description,index)=>`<li><span class="business-step-number">${index+1}</span><span class="business-step-text">${escapeHTML(description)}</span></li>`).join('');
  $('prevStep').disabled=state.flow===0&&state.page===0;
  $('nextStep').disabled=state.flow===FLOWS[state.role].length-1&&state.page===flow.pages.length-1;
  // Keep only the currently selected chip in view without scrolling the document.
  ['flowNav','screenNav'].forEach(id=>{const node=$(id),active=node.querySelector('.is-active'); if(active)node.scrollLeft=Math.max(0,active.offsetLeft-node.offsetLeft-20);});
}
function selectRole(role){if(!FLOWS[role])return;state.role=role;state.flow=0;state.page=0;draw();}
function selectMode(mode){if(!['dual','web','app'].includes(mode))return;state.mode=mode;draw();}
function selectFlow(n){if(!FLOWS[state.role][n])return;state.flow=n;state.page=0;draw();}
function selectPage(n){if(!selectedFlow().pages[n])return;state.page=n;draw();}
function move(direction){const p=state.page+direction,flows=FLOWS[state.role];if(selectedFlow().pages[p]){selectPage(p);return;}const f=state.flow+(direction>0?1:-1);if(flows[f]){state.flow=f;state.page=direction>0?0:flows[f].pages.length-1;draw();}}
function openModal(kind){
  const item=selectedStep(),src=kind==='web'?item.web.src:item.app;
  if(!src)return;
  state.kind=kind;state.zoom=1;
  const modalMock=$('modalMock'),modalImg=$('modalImage');
  const isMock=kind==='web' && !$('webMock').hidden;
  modalMock.hidden=!isMock;modalImg.hidden=isMock;
  if(isMock){modalMock.innerHTML=renderMockWeb(item);}
  else{modalMock.innerHTML='';modalImg.src=src;}
  $('modalTitle').textContent=kind==='web'?item.web.title:item.appTitle;
  $('imageModal').hidden=false;
  document.body.classList.add('modal-open');
  zoomModal();$('closeModal').focus();
}
function zoomModal(){const isMock=state.kind==='web' && !$('modalMock').hidden; $('zoomIn').hidden=isMock;$('zoomOut').hidden=isMock;$('zoomFit').hidden=isMock;const img=$('modalImage'); if(isMock)return;if(state.kind==='app')img.style.width=String(420*state.zoom)+'px';else img.style.width=String(100*state.zoom)+'%';$('zoomOut').disabled=state.zoom<=.7;$('zoomIn').disabled=state.zoom>=2.5;}
function closeModal(){$('imageModal').hidden=true;document.body.classList.remove('modal-open');state.kind=null;}
document.addEventListener('click',event=>{
  const role=event.target.closest('[data-role]');if(role)return selectRole(role.dataset.role);
  const mode=event.target.closest('[data-mode]');if(mode)return selectMode(mode.dataset.mode);
  const flow=event.target.closest('[data-flow]');if(flow)return selectFlow(Number(flow.dataset.flow));
  const page=event.target.closest('[data-page]');if(page)return selectPage(Number(page.dataset.page));
  const journey=event.target.closest('[data-journey-step]');if(journey)return goJourney(journey.dataset.journey,Number(journey.dataset.journeyStep));
});
$('restart').addEventListener('click',()=>{state.role='staff';state.flow=0;state.page=0;state.mode='dual';draw();});
$('prevStep').addEventListener('click',()=>move(-1));
$('nextStep').addEventListener('click',()=>move(1));
$('journeyNext').addEventListener('click',()=>{
  const sc=activeScenario();if(!sc)return;
  const cur=sc.steps.findIndex(q=>q.role===state.role && q.flow===selectedFlow().name && q.page===selectedStep().title);
  if(cur>=0&&cur+1<sc.steps.length)goJourney(sc.id,cur+1);
});
$('expandWeb').addEventListener('click',()=>openModal('web'));
$('expandApp').addEventListener('click',()=>openModal('app'));
$('webImage').addEventListener('click',()=>openModal('web'));
$('closeShade').addEventListener('click',closeModal);
$('closeModal').addEventListener('click',closeModal);
$('zoomOut').addEventListener('click',()=>{state.zoom=Math.max(.7,Math.round((state.zoom-.25)*100)/100);zoomModal();});
$('zoomIn').addEventListener('click',()=>{state.zoom=Math.min(2.5,Math.round((state.zoom+.25)*100)/100);zoomModal();});
$('zoomFit').addEventListener('click',()=>{state.zoom=1;zoomModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('imageModal').hidden){closeModal();return;}if(!$('imageModal').hidden||['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1);});
// Horizontal swipe changes the selected screen. Vertical scrolling remains native and scrollbar-free.
let swipeX=0,swipeY=0;
$('phoneViewport').addEventListener('touchstart',e=>{if(e.touches.length!==1)return;swipeX=e.touches[0].clientX;swipeY=e.touches[0].clientY;},{passive:true});
$('phoneViewport').addEventListener('touchend',e=>{if(e.changedTouches.length!==1)return;const dx=e.changedTouches[0].clientX-swipeX,dy=e.changedTouches[0].clientY-swipeY;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.6)move(dx<0?1:-1);},{passive:true});
draw();


