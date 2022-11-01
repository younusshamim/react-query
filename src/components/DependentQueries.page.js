import React from "react";
import { useQuery } from "react-query";
import { fetchCoursesByChannelId } from "../services/courses";
import { fetchUserByEmail } from "../services/user";

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;

  const { data: courses } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    { enabled: !!channelId }
  );

  return (
    <div>
      <h2>Dependent Queries Page- (Courses)</h2>
      {courses?.data?.courses.map((course, i) => (
        <h4 key={i}>{course}</h4>
      ))}
    </div>
  );
};

export default DependentQueriesPage;
