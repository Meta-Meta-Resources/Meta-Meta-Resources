import React from 'react';
import Markdown from "react-markdown";

const LearningHeader = ({topic, repo, url}) => (
    <Markdown source={`The items in this first section are visual and interactive demonstrations of concepts in ${topic}. The resources in the second section, pulled from an up-to-date version of [${repo}](${url}), are part of a more complete summary of ${topic} learning resources. Also see this web book's [Online Learning Overview](/online-learning-opportunities/overview) and [Massive Open Online Courses](/online-learning-opportunities/moocs) pages, which emcompass ${topic} (but also other topics') resources as well.`} />
);

export default LearningHeader;
