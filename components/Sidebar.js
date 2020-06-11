import { Button, Menu } from 'antd';
import React, {useEffect, useState} from 'react';
import {off, on} from "../utils/events";

function Sidebar({ jobs, job, onSelect, onCreate }) {
    const [selected, setSelected] = useState([]);

    const select = ({ key }) => {
        setSelected([key])
        const job = jobs.find(j => j.key === key);
        onSelect(job);
    };

    const reset = () => {
        setSelected([]);
    }

    const updated = ({ detail }) => {
        setSelected([detail.key]);
    }

    useEffect(() => {
        if (job) {
            setSelected([job.key])
        } else {
            setSelected([])
        }
        // on('new-job', reset)
        // on('updated', updated)
        return () => {
            // off('new-job', reset)
            // off('updated', updated)
        }
    }, [job])

    return (
        <Menu
            onClick={select}
            mode="inline"
            selectedKeys={selected}
            className="h-screen overflow-x-hidden overflow-y-auto"
        >
            <li
                className="ant-menu-item ant-menu-item-only-child"
                role="menuitem"
                style={{ paddingLeft: 24, height: 60 }}
            >
                <div className="mt-4">
                    <Button onClick={onCreate} type="primary" className="w-full">
                        Create Job
                    </Button>
                </div>
            </li>
            {jobs.map(job => (
                <Menu.Item key={job.key}>{job.name}</Menu.Item>
            ))}
        </Menu>
    );
}

export default Sidebar;
