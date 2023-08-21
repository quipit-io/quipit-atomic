import { JSX, Fragment } from "../../src.deps.ts";
import { Action, ActionStyleTypes, ActionProps } from "../../atoms/_exports.tsx";
import { ActionGroup } from "../../molecules/_exports.tsx";

export interface FeedCardProps {
  username: string;
  avatar: string;
  timestamp: string;
  content: string;
  image?: string;
  video?: string;
  actions?: ActionProps[] | JSX.Element;
}

export function FeedCard(props: FeedCardProps): JSX.Element {
  const actions = Array.isArray(props.actions) ? props.actions : undefined;

  return (
    <div class="bg-white rounded-lg shadow-md p-4">
      <div class="flex items-center">
        <img
          src={props.avatar}
          class="w-10 h-10 rounded-full mr-2"
          alt={props.username}
        />
        <div class="flex flex-col">
          <span class="font-bold">{props.username}</span>
          <span class="text-gray-500 text-sm">{props.timestamp}</span>
        </div>
      </div>
      <div class="mt-4">
        {props.content}
      </div>
      {props.image && (
        <img src={props.image} class="mt-4 rounded-lg" alt="Post Image" />
      )}
      {props.video && (
        <video src={props.video} class="mt-4 rounded-lg" controls></video>
      )}
      <div class="flex justify-between mt-4">
        <ActionGroup>
          <>
            {!actions && props.actions}
            {actions &&
              actions.map((action, index) => (
                <Action key={index} {...action} />
              ))}
          </>
        </ActionGroup>
      </div>
    </div>
  );
}
