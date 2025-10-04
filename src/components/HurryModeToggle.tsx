import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface HurryModeToggleProps {
  onToggle: (enabled: boolean, details?: HurryModeDetails) => void;
}

export interface HurryModeDetails {
  timeFrame: string;
  budget: string;
  notes: string;
}

const HurryModeToggle = ({ onToggle }: HurryModeToggleProps) => {
  const [enabled, setEnabled] = useState(false);
  const [details, setDetails] = useState<HurryModeDetails>({
    timeFrame: "15",
    budget: "",
    notes: "",
  });

  const handleToggle = (checked: boolean) => {
    setEnabled(checked);
    if (checked) {
      onToggle(true, details);
    } else {
      onToggle(false);
    }
  };

  const handleDetailsChange = (field: keyof HurryModeDetails, value: string) => {
    const newDetails = { ...details, [field]: value };
    setDetails(newDetails);
    if (enabled) {
      onToggle(true, newDetails);
    }
  };

  return (
    <Card className={`border-2 transition-all ${enabled ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/20' : ''}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full ${enabled ? 'bg-orange-500' : 'bg-muted'}`}>
              <Zap className={`h-5 w-5 ${enabled ? 'text-white' : 'text-muted-foreground'}`} />
            </div>
            <div>
              <Label htmlFor="hurry-mode" className="text-lg font-semibold cursor-pointer">
                ⚡ Hurry Mode - Quick Connect
              </Label>
              <p className="text-sm text-muted-foreground">
                Instantly broadcast to nearby providers
              </p>
            </div>
          </div>
          <Switch
            id="hurry-mode"
            checked={enabled}
            onCheckedChange={handleToggle}
            className="data-[state=checked]:bg-orange-500"
          />
        </div>

        {enabled && (
          <div className="space-y-4 pt-4 border-t animate-fade-in">
            <div>
              <Label htmlFor="timeframe" className="text-sm font-medium">
                Need service within (minutes)
              </Label>
              <Input
                id="timeframe"
                type="number"
                placeholder="15"
                value={details.timeFrame}
                onChange={(e) => handleDetailsChange("timeFrame", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="budget" className="text-sm font-medium">
                Budget Range (Optional)
              </Label>
              <Input
                id="budget"
                placeholder="e.g., ₹500-₹1000"
                value={details.budget}
                onChange={(e) => handleDetailsChange("budget", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="notes" className="text-sm font-medium">
                Additional Notes (Optional)
              </Label>
              <Textarea
                id="notes"
                placeholder="Describe your urgent need..."
                value={details.notes}
                onChange={(e) => handleDetailsChange("notes", e.target.value)}
                className="mt-1 min-h-[80px]"
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default HurryModeToggle;
