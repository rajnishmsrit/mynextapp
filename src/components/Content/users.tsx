import React, { useEffect, useState } from 'react';

const Content:React.FC<{goal:number}> = ({goal}) => {
  return <div>Welcome to Next.js World {goal}</div>
}

export default Content