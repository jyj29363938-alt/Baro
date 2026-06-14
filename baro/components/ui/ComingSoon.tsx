import { Header } from "@/components/ui/Header";

interface ComingSoonProps {
  title: string;
}

export function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div>
      <Header title={title} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          color: "var(--text-tertiary)",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        준비 중인 화면입니다.
      </div>
    </div>
  );
}
