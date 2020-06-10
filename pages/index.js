import React, {useEffect, useState} from 'react';
import {message, Modal, Spin} from 'antd';
import Placeholder from '../components/Placeholder';
import Sidebar from '../components/Sidebar';
import Editor from '../components/Editor';
import {makeJob} from "../utils/helpers";

function App({ initialJobs }) {
  const [jobs, setJobs] = useState(initialJobs);
  const [job, setJob] = useState(null);

  const connect = async (selected = null) => {
      const res = await fetch('http://localhost:3000/api/get')
      const js = await res.json();

      console.log(js)

      setJobs(js);
  };

  const onCreate = async () => {
    if (job && !job.key) {
      return 'already an unsaved job.';
    }

    const resp = await fetch('http://localhost:3000/api/placeholder');
    const b = await resp.json();
    return setJob(b);
  };

  const onCancel = () => {
    message.success('Changes cancelled.');
    setJob(null);
    connect();
  };

  const onSave = (j, payload) => {
    const newJob = api.create(
        payload.command,
        [
          payload.minute,
          payload.hour,
          payload.day,
          payload.month,
          payload.weekday
        ].join(' '),
        payload.name
    );

    if (!newJob || !newJob.isValid()) {
      return message.error('Invalid cron syntax');
    }

    api.remove(j.job);

    return api.save(() => {
      const x = makeJob(newJob);
      message.success(`${x.name} saved.`);
      connect(x);
    });
  };

  const onDelete = j => {
    Modal.confirm({
      title: j.name,
      content: `Are you sure you want to delete this job?`,
      onOk() {
        api.remove(j.job);
        api.save(() => {
          setJob(null);
          message.error(`${j.name} deleted.`);
          connect();
        });
      }
    });
  };

  // useEffect(() => {
  //   connect();
  //
  //   on('touchbar-create', onCreate);
  //
  //   return () => off('touchbar-create', onCreate);
  // }, []);

  return (
      <>
        <div className="flex flex-wrap min-h-screen">
          <nav className="w-1/4">
            <Sidebar onCreate={onCreate} jobs={jobs} onSelect={setJob}/>
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

export const getServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/get')

    return {
      props: {
        initialJobs: await res.json(),
      },
    }
  } catch (error) {
    return {
      props: {
        initialJobs: [],
      }
    }
  }
}

export default App;
