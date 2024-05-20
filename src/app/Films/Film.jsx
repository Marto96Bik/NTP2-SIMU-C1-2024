import Link from "next/link";

export default function User(props) {
  return (
    <li>
      <div>
        <Link href={`/Films/${props.Id}`}>
          <div>
            <img src={props.Poster} alt="{props.Title}" />
          </div>
          <div>
            <h5>{props.Title}</h5>
            <h5>{props.Fullplot}</h5>
          </div>
        </Link>
      </div>
    </li>
  );
}
