import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface InstantModeToggleProps {
  onToggle: (enabled: boolean) => void;
}

const InstantModeToggle = ({ onToggle }: InstantModeToggleProps) => {
  const [instantMode, setInstantMode] = useState(false);

  const handleToggle = (checked: boolean) => {
    setInstantMode(checked);
    onToggle(checked);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={instantMode ? "default" : "ghost"}
          size="icon"
          className={`relative ${
            instantMode
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : ""
          }`}
        >
          <Zap className={`h-5 w-5 ${instantMode ? "animate-pulse" : ""}`} />
          {instantMode && (
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-500" />
              Instant Mode
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Receive urgent job requests from customers near you
            </p>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex-1">
              <Label htmlFor="instant-mode" className="font-medium cursor-pointer">
                Available for Instant Jobs
              </Label>
              <p className="text-xs text-muted-foreground mt-1">
                Get notified when customers need urgent help
              </p>
            </div>
            <Switch
              id="instant-mode"
              checked={instantMode}
              onCheckedChange={handleToggle}
              className="data-[state=checked]:bg-orange-500"
            />
          </div>

          {instantMode ? (
            <div className="space-y-3">
              <Badge className="bg-green-500 w-full justify-center py-2">
                ✓ You're Live! Ready for instant jobs
              </Badge>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• You'll receive instant notifications</p>
                <p>• 30 seconds to accept each request</p>
                <p>• First to accept gets the job</p>
                <p>• Higher ratings get priority</p>
              </div>
            </div>
          ) : (
            <div className="text-xs text-muted-foreground">
              <p>Turn on to start receiving instant job requests from customers who need urgent help.</p>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default InstantModeToggle;
