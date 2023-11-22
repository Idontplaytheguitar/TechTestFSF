import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '../../@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../@/components/ui/form';
import { Input } from '../../@/components/ui/input';
import userAndRepo from '../interfaces/userAndRepo';
const formSchema = z.object({
  user: z
    .string()
    .min(1, {
      message: 'You cannot send an empty username',
    })
    .max(40, {
      message: 'Github usernames do not exceed 40 characters',
    }),
  repo: z
    .string()
    .min(1, {
      message: 'You cannot send an empty repo name',
    })
    .max(100, {
      message: 'Github repo names do not exceed 100 characters',
    }),
});

export default function RepoSearch(props: {
  userAndRepoChange: (obj:userAndRepo) => void;
}) {
  const { userAndRepoChange } = props;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: '',
      repo: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    userAndRepoChange(values);
  }

  return (
    <Form {...form}>
      <h1 className="text-slate-300 text-2xl">Repo search</h1>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 mb-10 p-5 max-w-lg w-full"
      >
        <FormField
          control={form.control}
          name="user"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username of the owner</FormLabel>
              <FormControl>
                <Input placeholder="Idontplaytheguitar" {...field} />
              </FormControl>
              <FormDescription>
                https://github.com/THIS ONE/...
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of the repo</FormLabel>
              <FormControl>
                <Input placeholder="TechTestFSF" {...field} />
              </FormControl>
              <FormDescription>
                https://github.com/.../THIS ONE
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="outline"
          className="text-sky-300/70 enabled:hover:text-sky-300 enabled:hover:bg-sky-300/10"
          type="submit"
        >
          Submit
        </Button>
        <Button
          type="button"
          variant="outline"
          className="text-green-300/70 enabled:hover:text-green-300 enabled:hover:bg-green-300/10"
          onClick={() =>
            onSubmit({
              user: 'Idontplaytheguitar',
              repo: 'TechTestFSF',
            })
          }
        >
          Test repo
        </Button>
      </form>
    </Form>
  );
}
