import { Eye, Palette, Volume2, Navigation } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAccessibility } from '@/hooks/useAccessibility';

const AccessibilitySettings = () => {
  const { settings, updateSetting, playFeedbackSound } = useAccessibility();

  const handleToggle = (key: keyof typeof settings, value: boolean) => {
    updateSetting(key, value);
    playFeedbackSound();
  };

  const handleSliderChange = (value: number[]) => {
    updateSetting('fontSize', value[0]);
    playFeedbackSound();
  };

  const handleSelectChange = (value: string) => {
    updateSetting('colorTheme', value as any);
    playFeedbackSound();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3 mb-2">
          <Eye className="w-6 h-6 text-foreground" />
          <h1 className="text-3xl font-semibold text-foreground">Accessibility Settings</h1>
        </div>
        <p className="text-muted-foreground">
          Customize your interface for optimal comfort and accessibility
        </p>
      </div>

      {/* Visual Preferences */}
      <Card className="p-6 space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <Palette className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-xl font-medium text-foreground">Visual Preferences</h2>
        </div>

        {/* High Contrast Mode */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <label className="text-base font-medium text-foreground">High Contrast Mode</label>
          </div>
          <Switch
            checked={settings.highContrast}
            onCheckedChange={(checked) => handleToggle('highContrast', checked)}
            className="data-[state=checked]:bg-accessibility-blue"
          />
        </div>

        {/* Reduce Motion */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <label className="text-base font-medium text-foreground">Reduce Motion</label>
          </div>
          <Switch
            checked={settings.reduceMotion}
            onCheckedChange={(checked) => handleToggle('reduceMotion', checked)}
            className="data-[state=checked]:bg-accessibility-blue"
          />
        </div>

        {/* Font Size */}
        <div className="space-y-4">
          <label className="text-base font-medium text-foreground">Font Size</label>
          <div className="space-y-3">
            <Slider
              value={[settings.fontSize]}
              onValueChange={handleSliderChange}
              max={24}
              min={12}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Small (12px)</span>
              <span>Large (24px)</span>
            </div>
          </div>
        </div>

        {/* Color Theme */}
        <div className="space-y-3">
          <label className="text-base font-medium text-foreground">Color Theme</label>
          <Select value={settings.colorTheme} onValueChange={handleSelectChange}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="monochrome">Monochrome</SelectItem>
              <SelectItem value="high-contrast">High Contrast</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Audio Preferences */}
      <Card className="p-6 space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <Volume2 className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-xl font-medium text-foreground">Audio Preferences</h2>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <label className="text-base font-medium text-foreground">Enable Sound Feedback</label>
          </div>
          <Switch
            checked={settings.soundFeedback}
            onCheckedChange={(checked) => handleToggle('soundFeedback', checked)}
            className="data-[state=checked]:bg-accessibility-blue"
          />
        </div>
      </Card>

      {/* Navigation Preferences */}
      <Card className="p-6 space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <Navigation className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-xl font-medium text-foreground">Navigation Preferences</h2>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <label className="text-base font-medium text-foreground">Enhanced Keyboard Navigation</label>
          </div>
          <Switch
            checked={settings.keyboardNavigation}
            onCheckedChange={(checked) => handleToggle('keyboardNavigation', checked)}
            className="data-[state=checked]:bg-accessibility-blue"
          />
        </div>
      </Card>

      {/* Accessibility Tips */}
      <Card className="p-6 bg-tips-background border-border">
        <h3 className="text-lg font-medium text-foreground mb-3">Accessibility Tips:</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Use Tab key to navigate between form fields</li>
          <li>• Press Space to activate buttons and checkboxes</li>
          <li>• Use arrow keys in dropdown menus</li>
          <li>• Enable screen reader if you use assistive technology</li>
        </ul>
      </Card>
    </div>
  );
};

export default AccessibilitySettings;