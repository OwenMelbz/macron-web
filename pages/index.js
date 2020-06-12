import React, {useEffect, useState} from 'react';
import {message, Modal} from 'antd';
import Placeholder from '../components/Placeholder';
import Sidebar from '../components/Sidebar';
import Editor from '../components/Editor';
import {placeholder, endpoint} from "../utils/helpers";
import {fire} from "../utils/events";

function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState(null);

  const connect = async (selected = null) => {
    const res = await fetch(endpoint('get'))
    const js = await res.json();

    setJobs(js);
  };

  const onCreate = () => {
    if (job && !job.key) {
      return 'already an unsaved job.';
    }

    fire('new-job');

    const b = placeholder();
    return setJob(b);
  };

  const onCancel = async () => {
    message.success('Changes cancelled.');
    setJob(null);

    const res = await fetch(endpoint('refresh'))
    const js = await res.json();

    setJobs(js);
  };

  const onSave = async (j, payload) => {
    const data = {
      key: j.key,
      command: payload.command,
      comment: payload.name,
      interval: [
        payload.minute,
        payload.hour,
        payload.day,
        payload.month,
        payload.weekday
      ].join(' '),
    };

    const res = await fetch(endpoint('save'), {
      method: 'POST',
      body: JSON.stringify(data)
    })

    const {job, jobs, error} = await res.json();

    if (error) {
      return message.error(error);
    }

    setJobs(jobs);
    setJob(job);

    return message.success(`${job.name} saved.`);
  };

  const onDelete = j => {
    Modal.confirm({
      title: j.name,
      content: `Are you sure you want to delete this job?`,
      onOk: async () => {
        const res = await fetch(endpoint('delete'), {
          method: 'POST',
          body: j.key
        })

        const jobs = await res.json();

        setJobs(jobs);
        setJob(null);

        message.error(`${j.name} deleted.`);
      }
    });
  };

  useEffect(() => {
    const load = async () => {
      const res = await fetch(endpoint('refresh'))
      const js = await res.json();

      setJobs(js);
    }

    load();
  }, [])

  return (
      <>
        <div className="flex flex-wrap min-h-screen">
          <nav className="w-1/4">
            <Sidebar onCreate={onCreate} jobs={jobs} job={job} onSelect={setJob}/>
          </nav>
          <div className="w-3/4">
            {job ? (
                <Editor
                    onCancel={onCancel}
                    onSave={onSave}
                    onDelete={onDelete}
                    job={job}
                />
            ) : (
                <Placeholder onCreate={onCreate}/>
            )}
          </div>
        </div>
      </>
  );
}

export default App;
