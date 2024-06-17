import { cn } from "@/shared/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-light-bg-black-80", className)}
      {...props}
    />
  )
}

export { Skeleton }
