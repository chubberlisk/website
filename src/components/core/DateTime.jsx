import React from "react";
import { formatDate } from "@/formatters/date";

export default function DateTime({ dateTime }) {
  return <time dateTime={dateTime}>{formatDate(dateTime)}</time>;
}
