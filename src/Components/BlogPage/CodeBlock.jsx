import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `local wezterm = require("wezterm")

local config = wezterm.config_builder()

config.font = wezterm.font("JetBrains Mono", { weight = "Medium" })
config.font_size = 13.5

config.window_background_opacity = 0.96
config.hide_tab_bar_if_only_one_tab = true

config.window_padding = {
  left = 8,
  right = 8,
  top = 8,
  bottom = 8,
}

config.keys = {
  {
    key = "P",
    mods = "CTRL|SHIFT",
    action = wezterm.action.SpawnCommandInNewTab({
      args = { "bash", "-c", "cd ~/Developer && zsh" },
    }),
  },
}

return config`;

export default function CodePreview() {
  return (
    <div className=" bg-black flex items-center justify-center p-6">
      
      <div className="w-full  rounded-[8px] border border-[#292929] overflow-hidden bg-[#0d0d0d] p-5 relative shadow-lg">

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl pointer-events-none 
                        shadow-[0_0_40px_rgba(139,92,246,0.15)]" />

        {/* Header */}
        <div className="text-[#BDBDBD] bg- text-start text-sm mb-4 font-mono">
          ~/.config/wezterm/wezterm.lua
        </div>

        {/* Code */}
        <SyntaxHighlighter
          language="lua"
          style={vscDarkPlus}
          showLineNumbers
          customStyle={{
            background: "transparent",
            fontSize: "13px",
            margin: 0,
            padding: 0,
          }}
          codeTagProps={{
            style: {
              fontFamily: "JetBrains Mono, monospace",
            },
          }}
        >
          {codeString}
        </SyntaxHighlighter>

      </div>
    </div>
  );
}