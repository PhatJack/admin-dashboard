"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useThemeCustom } from "@/context/ThemeCustomContext"

import { toast } from "sonner"

const ThemeCustomizer = () => {
  const { currentPreset, presets, applyPreset, resetTheme } = useThemeCustom()

  const handlePresetChange = (presetName: string) => {
    applyPreset(presetName)
    toast.success("Applyed theme: " + presetName)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold text-muted-foreground">Color Presets</h2>
      <div className="space-y-4">
        <RadioGroup
          value={currentPreset}
          onValueChange={handlePresetChange}
          className="grid grid-cols-2 gap-4"
        >
          {Object.keys(presets).map((presetName) => {
            const preset = presets[presetName]

            return (
              <Label
                key={presetName}
                htmlFor={presetName}
                className="flex flex-1 cursor-pointer items-center gap-3 rounded-lg border p-3 transition hover:bg-muted has-data-[state=checked]:border-primary"
              >
                <RadioGroupItem value={presetName} id={presetName} />
                <div className="font-medium">{preset.label || presetName}</div>
              </Label>
            )
          })}
        </RadioGroup>
      </div>
    </div>
  )
}

export default ThemeCustomizer
