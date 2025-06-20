import React from "react";
import { useTranslation } from "react-i18next";

export interface WorkItemProps {
  companyName: String,
  jobPositionName: String,
  startDate: Date,
  endDate?: Date,
  description: String
}

const WorkItem = ({companyName, jobPositionName, startDate, endDate, description}: WorkItemProps) => {
    const endDateString = endDate ?? '*';

    return (
        <div className={`${companyName}-WorkItem`}>
            <dl>
                <dt><h3>{companyName}</h3></dt>
                <dt><b>{jobPositionName}</b> <i>{startDate.toString()} – {endDate?.toString() ?? '*'}</i></dt>
                <dt><p>{description}</p></dt>
            </dl>
        </div>);
};

export default WorkItem;