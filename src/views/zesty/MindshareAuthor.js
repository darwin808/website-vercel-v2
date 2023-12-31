/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Mindshare Authors
 * Name: mindshare_authors
 * Model ZUID: 6-60e084-x4fskm
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)
 * description (textarea)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-60e084-x4fskm
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import WithAlternateCards from '../../blocks/team/WithAlternateCards';

const fetchCardsData = async (uri, setFunc) => {
  const res = await fetch(uri).then((response) => response.json());
  res && (await setFunc(res));
};
function MindshareAuthor({ content }) {
  let zestyURL = content.zestyProductionMode
    ? process.env.zesty.production
    : process.env.zesty.stage;

  const uri = `${zestyURL}/-/authors.json`;
  const [authors, setauthors] = React.useState([]);

  // get data in initial load
  React.useEffect(() => {
    fetchCardsData(uri, setauthors);
  }, []);

  return (
    <>
      <WithAlternateCards
        title={content?.meta?.web?.seo_meta_title}
        description={content?.meta?.web?.seo_meta_description}
        authors={authors}
      />
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      {/* <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>
      <div>{content.meta.web.seo_meta_description}</div>
      <div
        style={{
          background: '#eee',
          border: '1px #000 solid',
          margin: '10px',
          padding: '20px',
        }}
      >
        <h2>Accessible Zesty.io JSON Object</h2>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div> */}
      {/* End of Zesty.io output example */}
    </>
  );
}

export default MindshareAuthor;
