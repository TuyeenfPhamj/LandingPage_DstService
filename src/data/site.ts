import {
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Camera,
  ChartNoAxesCombined,
  ClipboardList,
  Film,
  Globe2,
  Handshake,
  LayoutTemplate,
  Mail,
  Megaphone,
  Palette,
  Phone,
  RadioTower,
  Sparkles,
  Store,
  UsersRound,
} from "lucide-react";
/** Tạo URL ảnh phù hợp cả khi chạy local lẫn GitHub Pages. */
const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
import type {
  GalleryImage,
  NavItem,
  PartnerCase,
  ProcessStep,
  ProofPoint,
  Service,
} from "../types/site";

export const company = {
  name: "DST Group",
  fullName: "Công ty Cổ Phần Tập Đoàn DST",
  slogan: "Truyền thông rõ ràng - Thương hiệu dễ được chọn.",
  phone: "0328 247 888",
  representative: "Mr Thương",
  email: "info@dstgroup.vn",
  website: "dstgroup.vn",
  headquarters:
    "7-9/1 Nguyễn An Ninh, Phường Yết Kiêu, Thành phố Hạ Long, Tỉnh Quảng Ninh",
  serviceAddress: "Số 2, ô 1, ngõ 16 Cao Thắng, phường Hà Lầm, Quảng Ninh",
  established: "06/03/2020",
  license: "5701747448",
  capital: "10 tỷ đồng",
  logo: asset("assets/logos/dst-logo.png"),
  logoMedia: asset("assets/logos/dst-marketing-media.png"),
  facebook: "https://www.facebook.com/share/1EvWCZnNBi/?mibextid=wwXIfr",
};

export const navItems: NavItem[] = [
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Dịch vụ", href: "#dich-vu" },
  { label: "Quy trình", href: "#quy-trinh" },
  { label: "Dự án", href: "#du-an" },
  { label: "Liên hệ", href: "#lien-he" },
];

export const services: Service[] = [
  {
    title: "Quản trị Fanpage & TikTok",
    description:
      "DST xây dựng lịch nội dung, chủ đề, hình ảnh và video phù hợp để Fanpage và TikTok duy trì tần suất xuất hiện, tăng độ nhận diện và kết nối với khách hàng.",
    items: ["Lịch nội dung", "Video ngắn"],
    icon: ClipboardList,
  },
  {
    title: "TikTok Shop & vận hành kênh",
    description:
      "DST hỗ trợ xây dựng gian hàng, chuẩn bị nội dung bán hàng, triển khai livestream và kết nối KOL/KOC phù hợp với mục tiêu của thương hiệu.",
    items: ["Gian hàng", "Livestream"],
    icon: Store,
  },
  {
    title: "Thiết kế & nhận diện thương hiệu",
    description:
      "Thiết kế logo, bộ nhận diện và hệ thống ấn phẩm truyền thông giúp thương hiệu xuất hiện nhất quán trên online lẫn offline.",
    items: ["Logo", "Ấn phẩm"],
    icon: Palette,
  },
  {
    title: "Quảng cáo đa kênh",
    description:
      "DST thiết lập và theo dõi quảng cáo theo mục tiêu trên Facebook, Google, Zalo, TikTok và các tệp remarketing nhằm tối ưu hiệu quả ngân sách.",
    items: ["Facebook", "Remarketing"],
    icon: Megaphone,
  },
  {
    title: "Hình ảnh & media",
    description:
      "Sản xuất hình ảnh, TVC, video quảng cáo, recap sự kiện và nội dung media phục vụ truyền thông, bán hàng, tuyển dụng hoặc ra mắt sản phẩm.",
    items: ["Quay chụp", "Video"],
    icon: Camera,
  },
  {
    title: "Website & Landing page",
    description:
      "Thiết kế landing page, website doanh nghiệp và nội dung chuẩn SEO để khách hàng có điểm chạm chính thức, dễ tra cứu và dễ chuyển đổi.",
    items: ["Landing page", "SEO web"],
    icon: Globe2,
  },
  {
    title: "Hồ sơ năng lực",
    description:
      "Biên tập profile, catalogue, proposal và tài liệu giới thiệu để làm rõ năng lực, dịch vụ và điểm khác biệt khi làm việc với đối tác.",
    items: ["Profile", "Proposal"],
    icon: LayoutTemplate,
  },
  {
    title: "Setup truyền thông nhà hàng - khách sạn",
    description:
      "Tư vấn định hướng thương hiệu, truyền thông khai trương và kế hoạch vận hành marketing cho nhà hàng, khách sạn, du thuyền và trung tâm sự kiện.",
    items: ["F&B", "Sự kiện"],
    icon: Building2,
  },
];

export const proofPoints: ProofPoint[] = [
  { value: "01 đầu mối", label: "từ định hướng đến triển khai" },
  { value: "5+ năm", label: "triển khai Digital Marketing & Multimedia" },
  { value: "TikTok & Social", label: "năng lực triển khai nội dung và vận hành kênh" },
  { value: "10 tỷ đồng", label: "vốn điều lệ" },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Đánh giá hiện trạng",
    description:
      "DST đánh giá sản phẩm, thị trường, kênh đang có, đối thủ và mục tiêu kinh doanh trước khi đề xuất giải pháp.",
  },
  {
    step: "02",
    title: "Lập kế hoạch",
    description:
      "DST xác định hạng mục ưu tiên, thông điệp chính, kênh triển khai, lịch nội dung và ngân sách dự kiến.",
  },
  {
    step: "03",
    title: "Sản xuất",
    description:
      "DST triển khai quay chụp, thiết kế, viết nội dung, dựng video và chuẩn bị các tài sản truyền thông cần thiết cho chiến dịch.",
  },
  {
    step: "04",
    title: "Triển khai",
    description:
      "DST triển khai đăng tải nội dung, vận hành kênh, quảng cáo, livestream hoặc kết nối KOL/KOC theo kế hoạch đã thống nhất.",
  },
  {
    step: "05",
    title: "Tối ưu",
    description:
      "DST theo dõi hiệu quả, điều chỉnh nội dung, tối ưu ngân sách và cải thiện tỷ lệ chuyển đổi trong quá trình triển khai.",
  },
  {
    step: "06",
    title: "Báo cáo",
    description:
      "DST tổng hợp kết quả, nghiệm thu các hạng mục đã triển khai và đề xuất ưu tiên cho giai đoạn tiếp theo.",
  },
];

export const whyChooseUs = [
  {
    title: "Đội ngũ marketing - media đồng hành theo mục tiêu kinh doanh",
    description:
      "DST Group làm việc theo mục tiêu đã thống nhất, chủ động phối hợp và giữ nhịp triển khai rõ ràng với khách hàng.",
    icon: Sparkles,
  },
  {
    title: "Một đầu mối cho nhiều hạng mục",
    description:
      "DST Group kết nối tư vấn, sản xuất media, nội dung, thiết kế, quảng cáo và vận hành kênh vào một quy trình triển khai rõ ràng.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Quy trình minh bạch",
    description:
      "Mỗi chiến dịch được chia theo giai đoạn, có đầu việc cụ thể và báo cáo định kỳ để khách hàng dễ kiểm soát.",
    icon: BadgeCheck,
  },
  {
    title: "Triển khai TikTok Shop & social commerce",
    description:
      "DST hỗ trợ thương hiệu xây dựng nội dung bán hàng, chuẩn bị livestream, phát triển gian hàng và kết nối KOC/KOL phù hợp.",
    icon: BriefcaseBusiness,
  },
];

export const featuredCases: PartnerCase[] = [
  {
    title: "Valley Beach Club",
    scope: "Fanpage, nội dung, thiết kế hình ảnh, quảng cáo",
    description:
      "DST triển khai quản trị fanpage, nội dung, thiết kế hình ảnh và quảng cáo nhằm tăng độ phủ thương hiệu tại Quảng Ninh.",
    image: asset("assets/portfolio/profile-p68.webp"),
  },
  {
    title: "Hồ Cô Tiên",
    scope: "Hình ảnh, video review, fanpage, nội dung F&B",
    description:
      "DST sản xuất hình ảnh, video review, xây dựng fanpage và thiết kế nội dung truyền thông cho không gian F&B.",
    image: asset("assets/portfolio/profile-p70.webp"),
  },
  {
    title: "Bird's Nest Cafe",
    scope: "Tư vấn truyền thông, nhận diện, quảng cáo online",
    description:
      "DST tư vấn truyền thông, xây dựng fanpage, thiết kế nhận diện và triển khai quảng cáo online cho thương hiệu cafe.",
    image: asset("assets/portfolio/portfolio-p10.webp"),
  },
  {
    title: "Diamond Palace - Hạ Long",
    scope: "Tư vấn truyền thông, quảng cáo sự kiện",
    description:
      "DST tư vấn truyền thông và triển khai quảng cáo cho các chương trình, sự kiện và hoạt động nổi bật tại Diamond Palace Hạ Long.",
    image: asset("assets/portfolio/profile-p71.webp"),
  },
];

export const galleryImages: GalleryImage[] = [
  {
    title: "Valley Beach Club",
    category: "Sân khấu & sự kiện",
    detail: "Không gian sự kiện và hình ảnh triển khai tại điểm chạm thực tế.",
    src: asset("assets/project-photos/profile-p68-357.webp"),
    alt: "Không gian sự kiện Valley Beach Club",
  },
  {
    title: "Valley Beach Club",
    category: "Truyền thông sự kiện",
    detail: "Hoạt động truyền thông, trải nghiệm khách hàng và chất liệu social.",
    src: asset("assets/project-photos/profile-p68-413.webp"),
    alt: "Khách hàng tham gia sự kiện Valley Beach Club",
  },
  {
    title: "Hồ Cô Tiên",
    category: "Hình ảnh & nội dung",
    detail: "Hình ảnh món ăn, không gian và nội dung dùng cho kênh truyền thông.",
    src: asset("assets/project-photos/profile-p70-552.webp"),
    alt: "Hình ảnh nhà hàng Hồ Cô Tiên",
  },
  {
    title: "Hồ Cô Tiên",
    category: "Không gian & trải nghiệm",
    detail: "Góc không gian giúp khách hàng hình dung trải nghiệm trước khi ghé thử.",
    src: asset("assets/project-photos/profile-p70-534.webp"),
    alt: "Không gian nội thất nhà hàng Hồ Cô Tiên",
  },
  {
    title: "Diamond Palace",
    category: "Khách sạn & sự kiện",
    detail: "Hình ảnh không gian phục vụ truyền thông chương trình và sự kiện.",
    src: asset("assets/project-photos/profile-p71-454.webp"),
    alt: "Hình ảnh Diamond Palace Hạ Long",
  },
  {
    title: "Taxi Xanh Đông Bắc",
    category: "Truyền thông thương hiệu",
    detail: "Chất liệu hình ảnh hỗ trợ nhận diện và truyền thông thương hiệu.",
    src: asset("assets/project-photos/profile-p73-002.webp"),
    alt: "Hình ảnh dự án Taxi Xanh Đông Bắc",
  },
  {
    title: "Valley Beach Club",
    category: "Poster & key visual",
    detail: "Ấn phẩm line-up, visual sự kiện và nội dung quảng bá chương trình.",
    src: asset("assets/project-photos/profile-p69-016.webp"),
    alt: "Ấn phẩm truyền thông Valley Beach Club",
  },
  {
    title: "Valley Beach Club",
    category: "Ấn phẩm sự kiện",
    detail: "Banner chương trình và chất liệu truyền thông sử dụng trước sự kiện.",
    src: asset("assets/project-photos/profile-p69-699.webp"),
    alt: "Ấn phẩm chương trình Chi Đô Thôi Valley Beach Club",
  },
];

export const documentImages: GalleryImage[] = [
  {
    title: "Cana Beer",
    category: "Portfolio",
    src: asset("assets/portfolio/event-p03.webp"),
    alt: "Trang dự án Cana Beer của DST Group",
  },
  {
    title: "Gói dịch vụ quản trị",
    category: "Bảng dịch vụ",
    src: asset("assets/portfolio/event-p36.webp"),
    alt: "Bảng dịch vụ quản trị fanpage và xây kênh TikTok",
  },
  {
    title: "Thiết kế - Quảng cáo - Website",
    category: "Bảng dịch vụ",
    src: asset("assets/portfolio/event-p37.webp"),
    alt: "Bảng dịch vụ thiết kế, quảng cáo online và website",
  },
  {
    title: "TikTok Shop & Social",
    category: "Tài liệu dịch vụ",
    src: asset("assets/portfolio/profile-p17.webp"),
    alt: "Nội dung dịch vụ TikTok Shop và social commerce tại DST Group",
  },
];

export const serviceGroups = [
  { label: "Hình ảnh & nội dung", icon: Film },
  { label: "Hồ sơ năng lực", icon: LayoutTemplate },
  { label: "Quảng cáo đa kênh", icon: BarChart3 },
  { label: "Setup truyền thông F&B", icon: Handshake },
];

export const contactIcons = {
  phone: Phone,
  mail: Mail,
  office: Building2,
  social: RadioTower,
  booking: UsersRound,
};
