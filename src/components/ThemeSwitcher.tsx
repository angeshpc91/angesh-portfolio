
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ThemeSwitcher = () => {
  const { theme, colorMode, setTheme, setColorMode } = useTheme();

  const themes = [
    { id: "brand", label: "Blue", colorClass: "bg-blue-500" },
    { id: "purple", label: "Purple", colorClass: "bg-purple-500" },
    { id: "green", label: "Green", colorClass: "bg-green-500" },
    { id: "orange", label: "Orange", colorClass: "bg-orange-500" }
  ];
  
  return (
    <div className="flex items-center space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
              className="rounded-full"
            >
              {colorMode === "light" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{colorMode === "light" ? "Dark" : "Light"} mode</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenu>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Palette className="h-5 w-5" />
                  <span className="sr-only">Color Palette</span>
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Change color theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Color Themes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {themes.map((t) => (
            <DropdownMenuItem
              key={t.id}
              onClick={() => setTheme(t.id as any)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className={`w-4 h-4 rounded-full ${t.colorClass}`} />
              <span>{t.label}</span>
              {theme === t.id && <span className="ml-auto">✓</span>}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSwitcher;
