import { Header } from "@/components/ui/Header";
import { Card } from "@/components/ui/Card";
import { Icon, IconName } from "@/components/ui/Icon";
import { notifications, NotificationType } from "@/data/notifications";

const TYPE_STYLE: Record<NotificationType, { icon: IconName; bg: string; color: string }> = {
  alarm: { icon: "alarm", bg: "var(--surface-mint-strong)", color: "var(--brand-primary)" },
  like: { icon: "favorite", bg: "var(--surface-mint-strong)", color: "var(--brand-primary)" },
  missed: { icon: "notifications_off", bg: "rgba(245, 158, 11, 0.14)", color: "var(--accent-streak)" },
};

export default function NotificationsPage() {
  const groups = notifications.reduce<Record<string, typeof notifications>>((acc, item) => {
    (acc[item.date] ??= []).push(item);
    return acc;
  }, {});

  return (
    <div>
      <Header title="알림 확인" />
      <div style={{ padding: "8px 20px 24px" }}>
        {Object.entries(groups).map(([date, items]) => (
          <div key={date} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-tertiary)", margin: "12px 4px 8px" }}>
              {date}
            </div>
            <Card padding="4px 16px" radius={20}>
              {items.map((item, i) => {
                const t = TYPE_STYLE[item.type];
                return (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      padding: "14px 0",
                      borderBottom: i === items.length - 1 ? "none" : "1px solid var(--border-subtle)",
                    }}
                  >
                    <span
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: t.bg,
                        color: t.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: "none",
                      }}
                    >
                      <Icon name={t.icon} size={20} color={t.color} />
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4, color: "var(--text-primary)" }}>
                        {item.message}
                      </div>
                      <div style={{ fontSize: 13, color: "var(--text-tertiary)", marginTop: 4 }}>{item.time}</div>
                    </div>
                    {item.unread && (
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "var(--brand-primary)",
                          flex: "none",
                          marginTop: 6,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
