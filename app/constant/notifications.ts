export type AppNotificationVariant = "default" | "warning" | "success"

export type AppNotification = {
  id: string
  title: string
  description: string
  time: string
  unread: boolean
  variant: AppNotificationVariant
}

export const appNotifications: AppNotification[] = [
  {
    id: "NTF-1001",
    title: "Export finished",
    description: "Monthly revenue report is ready to download.",
    time: "4m ago",
    unread: true,
    variant: "success",
  },
  {
    id: "NTF-1002",
    title: "Billing review needed",
    description: "Three invoices need approval before the next run.",
    time: "18m ago",
    unread: true,
    variant: "warning",
  },
  {
    id: "NTF-1003",
    title: "New workspace member",
    description: "Maya Chen joined the Growth workspace.",
    time: "1h ago",
    unread: false,
    variant: "default",
  },
  {
    id: "NTF-1004",
    title: "Scheduled maintenance",
    description: "API maintenance is planned for tonight at 23:00.",
    time: "3h ago",
    unread: false,
    variant: "default",
  },
	{
		id: "NTF-1005",
		title: "Password expiring soon",
		description: "Your password will expire in 5 days. Please update it.",
		time: "1d ago",
		unread: true,
		variant: "warning",
	},
	{
		id: "NTF-1006",
		title: "New login from unknown device",
		description: "A new login was detected from an unrecognized device.",
		time: "2d ago",
		unread: true,
		variant: "warning",
	},
	{
		id: "NTF-1007",
		title: "Subscription renewed",
		description: "Your subscription has been successfully renewed.",
		time: "3d ago",
		unread: false,
		variant: "success",
	},
	{
		id: "NTF-1008",
		title: "API rate limit approaching",
		description: "You have used 90% of your API rate limit for this month.",
		time: "4d ago",
		unread: true,
		variant: "warning",
	},
	{
		id: "NTF-1009",
		title: "New comment on your post",
		description: "Alex commented on your recent post in the forum.",
		time: "5d ago",
		unread: false,
		variant: "default",
	},
	{
		id: "NTF-1010",
		title: "System outage resolved",
		description: "The recent system outage has been resolved. All services are operational.",
		time: "6d ago",
		unread: false,
		variant: "success",
	},
	{
		id: "NTF-1011",
		title: "New feature released",
		description: "We have released a new feature that enhances your dashboard experience.",
		time: "1w ago",
		unread: false,
		variant: "success",
	}
]
