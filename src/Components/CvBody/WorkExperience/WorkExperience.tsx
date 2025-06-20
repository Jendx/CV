import TRANSLATION_KEYS from "@Constants/translationKeys";
import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import styles from 'global.module.css';
import WorkItem, { WorkItemProps } from "./WorkEntry";

const WorkExperience = () => {
    const { t } = useTranslation();
    const workItems = getWorkExperiences(t);

    return (
        <Fragment>
            <h3 className={styles['text-underline']}>{t(TRANSLATION_KEYS.WorkExperience_SectionTitle)}</h3>
            <Grid>
                <ol>
                    {workItems.map((item, i) => {
                        return <li><WorkItem {...item} key={`WorkItem-${i}`}/></li>;
                    })}
                </ol>
            </Grid>
            <hr/>
        </Fragment>
    );
};

const getWorkExperiences = (t: Function): WorkItemProps[] => {
    return [
        {
            companyName: 'Vendavo',
            jobPositionName: 'Associate Software Engineer',
            startDate: t(new Date(2023, 9, 1)),
            description: 'As a Full Stack Developer, I was responsible for maintaining and developing backend services using C# with ASP.NET and T-SQL, as well as working on the frontend with classic jQuery and React 16. I handled end-to-end deployments to Azure, including resolving CI/CD pipeline issues. In addition to technical duties, I supported team operations by facilitating scrum ceremonies, conducting technical interviews, and acting as a buddy for new onboardees.'
        }
    ]
}

export default WorkExperience;