import CheckUserSession from "@/components/check-user-session";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <CheckUserSession />
    </section>
  );
}
