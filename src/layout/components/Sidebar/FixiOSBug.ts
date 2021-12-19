import { computed, ref } from 'vue'
import { useAppStore } from '@/store/app'
const appStore = useAppStore()

const device = computed(_ => appStore.device)

const subMenuRef: any = ref(null)
const fixBugIniOS = () => {
  if (subMenuRef.value) {
    const handleMouseleave = subMenuRef.value.handleMouseleave
    subMenuRef.value.handleMouseleave = (e: any) => {
      if (device.value === 'mobile') {
        return
      }
      handleMouseleave(e)
    }
  }
}

fixBugIniOS()
