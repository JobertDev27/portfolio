import type React from "react";

export type SvgProps = {
    width: string,
    height: string
    className?: string
}

export type SocialsLinkProps = {
  site: string;
  children: React.ReactNode;
};

export type SkillProps = {
  name: string;
  image: React.ReactNode;
}

export type ProjectProps = {
  name: string;
  children: React.ReactNode;
  desc: string;
  stack: Array<string>;
  live: string;
  code : string 
}