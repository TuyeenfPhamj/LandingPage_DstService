import { BarChart3, Film, LayoutTemplate } from "lucide-react";

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const heroContent = {
  badge: "DST Marketing · Media",
  title: "Truyền thông rõ ràng,\ngiúp khách hàng hiểu\nvà tin vào thương hiệu.",
  highlightedPhrase: "tin vào thương hiệu",
  description:
    "DST Group đồng hành cùng doanh nghiệp xây dựng hình ảnh, nội dung, social media, quảng cáo và tài liệu truyền thông giúp khách hàng hiểu rõ dịch vụ trước khi ra quyết định.",
  primaryCta: "Nhận tư vấn",
  secondaryCta: "Xem năng lực",
  cardImage: asset("assets/portfolio/portfolio-p10.webp"),
  capabilities: [
    {
      label: "Hình ảnh & nội dung",
      icon: Film,
    },
    {
      label: "Hồ sơ năng lực",
      icon: LayoutTemplate,
    },
    {
      label: "Quảng cáo đa kênh",
      icon: BarChart3,
    },
  ],
};
