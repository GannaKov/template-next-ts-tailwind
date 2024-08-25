import React from 'react';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
}
export interface StatusExmplProps {
  children: React.ReactNode;
  status: Status;
}

const StatusExmpl = ({ children, status }: StatusExmplProps) => {
  return (
    <div
      className={`inline-flex items-center py-2 px-5 rounded-3xl text-sm font-medium border ${
        (status === Status.NotActive &&
          'text-zinc-700 bg-neutral-50 border-zinc-700') ||
        (status === Status.Active &&
          'text-green-700 bg-green-100 border-green-700') ||
        ''
      }`}
    >
      {children}
    </div>
  );
};

export default StatusExmpl;
