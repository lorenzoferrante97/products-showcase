import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div className='flex flex-col gap-4 py-10'>
        <Label htmlFor='switch'>
          <Switch />
          Switch label
        </Label>
      </div>
    </>
  )
}
