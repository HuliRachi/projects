import { createClient } from 'contentful';
import { React, useEffect, useState } from 'react';

const client = createClient({
  space: 'zxdh25k6e3nx',
  environment: 'master',
  accessToken: 'nFiqGCKX11fTgj9rvOASE9nA52CrniqdSHGS-vJ0b0Y',
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;

        const id = item.sys.id;
        const img = image?.fields?.file?.url;

        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
