export default async function DrawInfoFromDatabase({
    params
  } : {
    params: { user: string }
  }): Promise<JSX.Element> {
    const { rows } = await sql`SELECT username from USERS`;
  
    return (
      <div>
        {rows.map((row, index) => (
          <div key={index}>
            {row.username}
          </div>
        ))}
      </div>
    );
  }