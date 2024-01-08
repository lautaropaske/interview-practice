import Link from 'next/link'

const paths = [
  'file-tree-viewer',
  'hooks',
  'market',
  'signup',
  'sudoku',
  'tetris',
  'questionnaire'
]

export default function Home() {
  return (
    <div style={{ padding: '20px', margin: '20px' }}>
      <h1> React Challenges </h1>
      <ol>
      { paths.map((path,i)=> (
        <li key={i} style={{ margin: '10px' }}>
          <Link href={`/challenges/${path}`}>{path}</Link>
        </li>
      ))}
      </ol>
      <h1> React Solutions </h1>
      <ol>
        <li key='hooks' style={{ margin: '10px' }}>
          <Link href='/solutions/hooks'>hooks</Link>
        </li>
      </ol>
    </div>
  )
}
