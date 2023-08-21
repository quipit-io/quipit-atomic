import { classSet, Fragment, JSX } from "../../src.deps.ts";
import {
  Action,
  ActionProps,
  ActionStyleTypes,
} from "../../atoms/_exports.tsx";
import { ActionGroup } from "../../molecules/_exports.tsx";
import { ComponentChildren } from "https://deno.land/x/fathym_atomic@v0.0.41-integration/src/src.deps.ts";

export interface FeedCardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  username: string;
  avatar: string;
  timestamp: string;
  children: ComponentChildren;
  image?: string;
  video?: string;
  actions?: ActionProps[] | ComponentChildren;
}

export function FeedCard(props: FeedCardProps): JSX.Element {
  const actions = Array.isArray(props.actions) ? props.actions : undefined;

  return (
    <div class={classSet(props, "bg-white rounded-lg shadow-md p-4")}>
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
      {props.children}
      {props.image && (
        <img src={props.image} class="mt-4 rounded-lg" alt="Post Image" />
      )}
      {props.video && (
        <video src={props.video} class="mt-4 rounded-lg" controls></video>
      )}
      <div class="flex justify-center align-middle mt-4">
        <ActionGroup class="flex-grow flex justify-center align-middle">
          <>
            {!actions && props.actions}
            {actions &&
              actions.map((action, index) => (
                <Action
                  key={index}
                  {...action}
                />
              ))}
          </>
        </ActionGroup>
      </div>
    </div>
  );
}
