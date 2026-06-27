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
  Megaphone,
  Palette,
  RadioTower,
  Sparkles,
  Store,
  UsersRound,
} from "lucide-react";
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
  slogan: "Dịch vụ tận tâm - Nâng tầm thương hiệu",
  phone: "0328 247 888",
  representative: "Mr Thương",
  email: "info@dstgroup.vn",
  website: "dstgroup.vn",
  headquarters:
    "7-9/1 Nguyễn An Ninh, Phường Yết Kiêu, Thành phố Hạ Long, Tỉnh Quảng Ninh",
  serviceAddress: "Số 2 - Ô 1 Ngõ 16 Cao Thắng, P. Hà Lầm, Quảng Ninh",
  established: "06/03/2020",
  license: "5701747448",
  capital: "10.000.000.000 VNĐ",
  logo: "/assets/logos/dst-logo.png",
  logoMedia: "/assets/logos/dst-marketing-media.png",
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
    title: "ADS đa kênh",
    description:
      "Triển khai quảng cáo Facebook, Google, YouTube, Zalo, Instagram và TikTok theo từng mục tiêu truyền thông.",
    items: ["Tối ưu chi phí", "Tệp khách hàng", "Báo cáo chiến dịch"],
    icon: Megaphone,
  },
  {
    title: "TikTok Shop Partner",
    description:
      "Tư vấn, setup và phát triển gian hàng TikTok Shop; kết nối KOL/KOC, livestream và tối ưu vận hành.",
    items: ["Setup gian hàng", "TikTok Ads", "Livestream"],
    icon: Store,
  },
  {
    title: "Content & Fanpage",
    description:
      "Lập kế hoạch nội dung, viết bài, thiết kế hình ảnh, đăng tải và quản trị fanpage theo tháng.",
    items: ["15 bài/tháng", "Concept tháng", "Video reel"],
    icon: ClipboardList,
  },
  {
    title: "Design & Branding",
    description:
      "Thiết kế logo, bộ nhận diện, poster, voucher, tờ rơi, standee, menu và ấn phẩm cho chiến dịch.",
    items: ["Logo", "Ấn phẩm in ấn", "Poster sự kiện"],
    icon: Palette,
  },
  {
    title: "Studio & Media",
    description:
      "Chụp ảnh sản phẩm, quay TVC, video quảng cáo, recap sự kiện, intro giới thiệu và nội dung 4K.",
    items: ["Chụp ảnh", "TVC", "Recap sự kiện"],
    icon: Camera,
  },
  {
    title: "Website & Landing Page",
    description:
      "Thiết kế landing page, website doanh nghiệp, bài viết chuẩn SEO và chăm sóc website theo nhu cầu.",
    items: ["Landing page", "Website cơ bản", "SEO web"],
    icon: Globe2,
  },
  {
    title: "Booking & KOC/KOL",
    description:
      "Kết nối nhân sự sáng tạo, idol livestream, KOL/KOC và đối tác cùng tệp khách hàng cho chiến dịch.",
    items: ["Booking", "KOL/KOC", "Creator"],
    icon: UsersRound,
  },
  {
    title: "Setup Restaurant - Hotel",
    description:
      "Định hướng, truyền thông và triển khai kế hoạch setup cho nhà hàng, khách sạn, du thuyền, trung tâm sự kiện.",
    items: ["Nhà hàng", "Khách sạn", "Trung tâm sự kiện"],
    icon: Building2,
  },
];

export const proofPoints: ProofPoint[] = [
  { value: "2020", label: "thành lập tại Quảng Ninh" },
  { value: "5+", label: "năm kinh nghiệm Digital Marketing & Multimedia" },
  { value: "MCN & TSP", label: "đối tác chính thức của TikTok" },
  { value: "10 tỷ", label: "vốn điều lệ doanh nghiệp" },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Nghiên cứu",
    description:
      "Phân tích thị trường, sản phẩm, đối thủ, phân khúc giá và mục tiêu truyền thông của từng doanh nghiệp.",
  },
  {
    step: "02",
    title: "Lập kế hoạch",
    description:
      "Xây dựng plan theo tháng hoặc theo chiến dịch, xác định nội dung chủ lực, kênh triển khai và chỉ số cần tối ưu.",
  },
  {
    step: "03",
    title: "Sản xuất",
    description:
      "Thiết kế hình ảnh, viết content, quay dựng video, chuẩn bị landing page, fanpage hoặc gian hàng TikTok Shop.",
  },
  {
    step: "04",
    title: "Triển khai",
    description:
      "Chạy quảng cáo, quản trị kênh, livestream, booking KOC/KOL và phối hợp truyền thông online đa kênh.",
  },
  {
    step: "05",
    title: "Tối ưu",
    description:
      "Theo dõi hiệu quả, tối ưu chi phí, điều chỉnh thông điệp và cập nhật nội dung để tăng tỉ lệ chuyển đổi.",
  },
  {
    step: "06",
    title: "Báo cáo",
    description:
      "Báo cáo và nghiệm thu theo tuần, tháng hoặc quý với từng hạng mục đã triển khai.",
  },
];

export const whyChooseUs = [
  {
    title: "Đội ngũ trẻ, chuyên nghiệp",
    description:
      "DST Group định hướng đội ngũ marketing và kinh doanh làm việc có trách nhiệm, tận tâm và rõ mục tiêu.",
    icon: Sparkles,
  },
  {
    title: "Chi phí gọn cho một đội marketing",
    description:
      "Một đầu mối có thể xử lý fanpage, content, thiết kế, video, quảng cáo, website và tư vấn truyền thông.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Quy trình minh bạch",
    description:
      "Các chiến dịch được chia theo giai đoạn từ nghiên cứu, triển khai đến tối ưu và nghiệm thu định kỳ.",
    icon: BadgeCheck,
  },
  {
    title: "Mạnh về nhà hàng - khách sạn - sự kiện",
    description:
      "Danh mục dịch vụ và dự án tập trung nhiều vào trung tâm tiệc cưới, nhà hàng, bar, cafe, khách sạn và du lịch.",
    icon: BriefcaseBusiness,
  },
];

export const featuredCases: PartnerCase[] = [
  {
    title: "Valley Beach Club",
    description:
      "Quản trị fanpage, viết content, thiết kế hình ảnh và chạy ADS phủ sóng thương hiệu tại Quảng Ninh.",
    image: "/assets/portfolio/profile-p68.webp",
  },
  {
    title: "Hồ Cô Tiên",
    description:
      "Chụp ảnh sản phẩm, quay clip review, xây dựng và quản trị fanpage, thiết kế hình ảnh chuyên nghiệp.",
    image: "/assets/portfolio/profile-p70.webp",
  },
  {
    title: "Bird's Nest Cafe",
    description:
      "Tư vấn truyền thông, xây dựng fanpage, thiết kế logo, bộ nhận diện và quảng cáo marketing online đa kênh.",
    image: "/assets/portfolio/profile-p70.webp",
  },
  {
    title: "Diamond Palace - Hạ Long",
    description:
      "Tư vấn truyền thông và chạy ADS cho sự kiện triển lãm tiệc cưới tại trung tâm tiệc cưới Diamond Palace.",
    image: "/assets/portfolio/profile-p71.webp",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    title: "Valley Beach Club",
    category: "Sự kiện",
    src: "/assets/project-photos/profile-p68-357.webp",
    alt: "Không gian sự kiện Valley Beach Club",
  },
  {
    title: "Valley Beach Club",
    category: "Hoạt động thực tế",
    src: "/assets/project-photos/profile-p68-413.webp",
    alt: "Khách hàng tham gia sự kiện Valley Beach Club",
  },
  {
    title: "Hồ Cô Tiên",
    category: "Nhà hàng",
    src: "/assets/project-photos/profile-p70-552.webp",
    alt: "Hình ảnh nhà hàng Hồ Cô Tiên",
  },
  {
    title: "Hồ Cô Tiên",
    category: "Không gian F&B",
    src: "/assets/project-photos/profile-p70-534.webp",
    alt: "Không gian nội thất nhà hàng Hồ Cô Tiên",
  },
  {
    title: "Diamond Palace",
    category: "Trung tâm tiệc cưới",
    src: "/assets/project-photos/profile-p71-454.webp",
    alt: "Hình ảnh Diamond Palace Hạ Long",
  },
  {
    title: "Taxi Xanh Đông Bắc",
    category: "Dự án thương hiệu",
    src: "/assets/project-photos/profile-p73-002.webp",
    alt: "Hình ảnh dự án Taxi Xanh Đông Bắc",
  },
  {
    title: "Valley Beach Club",
    category: "Thiết kế truyền thông",
    src: "/assets/project-photos/profile-p69-016.webp",
    alt: "Ấn phẩm truyền thông Valley Beach Club",
  },
  {
    title: "Valley Beach Club",
    category: "Thiết kế truyền thông",
    src: "/assets/project-photos/profile-p69-699.webp",
    alt: "Ấn phẩm chương trình Chi Đô Thôi Valley Beach Club",
  },
];

export const documentImages: GalleryImage[] = [
  {
    title: "Cana Beer",
    category: "Portfolio",
    src: "/assets/portfolio/event-p03.webp",
    alt: "Trang dự án Cana Beer của DST Group",
  },
  {
    title: "Gói dịch vụ quản trị",
    category: "Bảng dịch vụ",
    src: "/assets/portfolio/event-p36.webp",
    alt: "Bảng dịch vụ quản trị fanpage và xây kênh TikTok",
  },
  {
    title: "Thiết kế - Quảng cáo - Website",
    category: "Bảng dịch vụ",
    src: "/assets/portfolio/event-p37.webp",
    alt: "Bảng dịch vụ thiết kế, quảng cáo online và website",
  },
  {
    title: "Quyền lợi TikTok Shop",
    category: "TikTok Shop Partner",
    src: "/assets/portfolio/profile-p17.webp",
    alt: "Nội dung quyền lợi TikTok Shop Partner tại DST Group",
  },
];

export const serviceGroups = [
  { label: "Marketing", icon: RadioTower },
  { label: "Media", icon: Film },
  { label: "ADS", icon: BarChart3 },
  { label: "Booking", icon: Handshake },
];
