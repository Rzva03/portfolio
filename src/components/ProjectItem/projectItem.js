import React from 'react';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import tecoaltApp from '../../assets/img/tecoatl.png';
import servApp from '../../assets/img/servicio-externo.png';

const TECOALT_APP = 'Tecoatl';

const ProjectItem = (props) => {
    const { id, name, subTitle } = props;

    const header = (
        <Image
            src={name === TECOALT_APP ? tecoaltApp : servApp}
            alt={name}
            preview
            downloadable={false}
        />
    );

    return (
        <Card
            className={`projectItem w-full md:w-1/5 hover:cursor-pointer projectItem__${id}`}
            header={header}
            title={name}
            subTitle={subTitle}
        >
        </Card>
    )
}

export default ProjectItem;
