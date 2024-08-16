import {LucideProps} from "lucide-react";
import React from "react";

export const Icons = {
  view: (props: LucideProps) => {
    return(
      <svg className="h-4 w-4 text-blue-500" width="24" height="24" viewBox="0 0 24 24"
           stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
           stroke-linejoin="round" {...props}>
        <path stroke="none" d="M0 0h24v24H0z"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2"/>
        <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2"/>
      </svg>
    )
  },
  delete: (props: LucideProps) => {
    return(
      <svg className="h-4 w-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" {...props}>
        <polyline points="3 6 5 6 21 6"/>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        <line x1="10" y1="11" x2="10" y2="17"/>
        <line x1="14" y1="11" x2="14" y2="17"/>
      </svg>
    )
  },
};
