





import React from "react";
import image from "../../assets/Images/profile.svg";
import CodePreview from "./CodeBlock";
import Blogs from "./Blogs";
import code from "../../assets/Images/code.svg"
import code1 from "../../assets/Images/code1.svg"
import {
  Breadcrumb,
  Title,
  Subtitle,
  Heading,
  Paragraph,
} from "./Typography";

function BlogHeading() {
  return (
    <section className="pt-[100px] lg:pt-[172px] px-2 sm:px-0">
      <div className="container text-center  text-white ">

        {/* Breadcrumb */}
        <Breadcrumb>
          Home / Blog / Every Tool in My Terminal-First Dev Setup
        </Breadcrumb>

        {/* Title */}
        <Title>
          Every Tool in My Terminal-First Dev Setup
        </Title>

        {/* Subtitle */}
        <Subtitle>
          Neovim, Wezterm, Tmux, and the rest — what survived two years of daily
          use and why I picked each one over the obvious alternatives.
        </Subtitle>

        {/* Author */}
        <div className="pt-[20px] lg:pt-[41px] flex justify-center items-center gap-[20px]">
          <img src={image} alt="author" />

          <div className="text-start">
            <h2 className="text-[18px] lg:text-[24px] leading-[15px] lg:leading-[24px] font-bold">
              Aayush Bharti
            </h2>
            <p className="text-[14px] leading-[24px] text-[#BDBDBD]">
              Oct 19, 2025 / 12 min read
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center pt-[20px] lg:pt-[43px]">

          <Paragraph className="w-full lg:max-w-[1100px] text-center">
            I switched to a terminal-first workflow two years ago and never
            looked back. The trigger was embarrassingly mundane: VS Code hit
            2.4GB of RAM during a Next.js debugging session while I had Chrome
            DevTools open, and my laptop froze for thirty seconds mid-demo.
            That same week, I watched a coworker navigate a monorepo in Neovim
            faster than I could open the file picker in VS Code.
          </Paragraph>

          <Paragraph className=" pt-[15px] lg:pt-[20px] max-w-[1100px]">
            I felt slow. Not "I should optimize this" slow — "I'm fighting my own
            tools" slow. So I committed to replacing every GUI developer tool
            with a terminal-native equivalent and gave myself three months to get
            productive. Everything in this list survived a regular purge — if a
            tool doesn't make me measurably better, it gets cut.
          </Paragraph>

          {/* Section */}
          <div className="pt-[27px] space-y-[12px] max-w-[1100px]">
            <Heading>
              The core four: editor, terminal, shell, multiplexer
            </Heading>
            <Paragraph>
              These are load-bearing walls. Swap out anything else and the
              system still works. Remove one of these and the whole workflow
              collapses.
            </Paragraph>
          </div>

          {/* Neovim */}
          <div className=" pt-[20px] lg:pt-[40px] max-w-[1100px]">
            <Heading>Neovim</Heading>

            <Paragraph className="pt-[12px]">
              Neovim is the center of gravity. I moved from VS Code because I
              was tired of Electron eating memory and the constant extension
              update churn breaking my setup every few weeks.
            </Paragraph>

            <Paragraph className=" pt-[15px]  lg:pt-[20px]">
              With native LSP support and Treesitter for syntax highlighting, I
              get the same intelligence features — autocomplete,
              go-to-definition, inline diagnostics — but startup takes 40ms
              instead of four seconds.
            </Paragraph>

            <Paragraph className=" pt-[15px]  lg:pt-[20px]">
              The real unlock was modal editing. Once you internalize that ciw
              replaces a word and dd deletes a line without reaching for the
              mouse, you stop thinking about text manipulation and start
              thinking about code.
            </Paragraph>
          </div>

          {/* Wezterm */}
          <div className="pt-[40px] max-w-[1100px]">
            <Heading>Wezterm</Heading>

            <Paragraph className="pt-[12px] ">
              Wezterm is a GPU-accelerated terminal emulator configured
              entirely in Lua. The killer feature is scriptable keybindings:
              opening tabs, navigating directories, and attaching sessions in
              one keystroke.
            </Paragraph>

            <div className="pt-[20px]">
              <img src={code} alt=" code image" />
            </div>

            <Paragraph className="pt-[12px]">
              One annoyance: Wezterm's multiplexer mode is half-baked compared to Tmux. I stopped trying to replace Tmux with it and let each tool do what it's best at.
            </Paragraph>
          </div>

          {/* ZSH */}
          <div className="pt-[15px]  lg:pt-[40px] max-w-[1100px]">
            <Heading>ZSH + Oh My Zsh</Heading>

            <Paragraph className="pt-[12px]">
            ZSH with Oh My Zsh is the shell layer. Bash's autocomplete is embarrassing  in 2025 — no inline suggestions, no syntax highlighting as you type, no  smart history search. ZSH's plugin ecosystem fixes all of that
            </Paragraph>

            <Paragraph className=" pt-[15px]  lg:pt-[20px]">
              I run three plugins that matter: zsh-autosuggestions (ghost-text completion from your history), zsh-syntax-highlighting (red text when a command doesn't exist, green when it does), and git (aliases like gco for git checkout). The rest of Oh My Zsh I could take or leave. My .zshrc is 80 lines and loads in under 200ms — if yours takes longer, audit your plugins.
            </Paragraph>
          </div>

          {/* Tmux */}
          <div className=" pt-[15px]  lg:pt-[40px] max-w-[1100px]">
            <Heading>Tmux</Heading>

            <Paragraph className="pt-[12px]">
              Tmux handles session persistence and workspace organization. When my SSH  connection drops or I close my laptop mid-debug session, Tmux keeps  every pane, every running process, every scroll position alive. I tried  Zellij for the modern UX and floating panes, but it crashed twice during production
            </Paragraph>

            <Paragraph className=" pt-[15px]  lg:pt-[20px]">
              incident debugging — the one time you absolutely need your  multiplexer to be rock solid. Tmux is boring and that's the point.
I have three persistent sessions: work, personal, and scratch. Prefix key is rebound to Ctrl+a (closer to home row than the default Ctrl+b), and I use tmux-resurrect to survive full system reboots
            </Paragraph>

            <div className="pt-[20px]">
              {/* <CodePreview /> */}
              <img src={code1} alt="coading image" />
            </div>

            <Paragraph className="pt-[12px]">
            The only complaint is that Tmux's copy mode keybindings are arcane until you configure vi-mode — but once you do, selecting and yanking text  feels like Neovim.
            </Paragraph>
          </div>

        </div>

        {/* Related Blogs */}
        <Blogs />
      </div>
    </section>
  );
}

export default BlogHeading;