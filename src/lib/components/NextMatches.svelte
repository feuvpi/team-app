<script lang='ts'>
    // Import necessary modules
    import { onMount } from 'svelte';
  
    // Mockup data for team's next matches
    let nextMatches = [
      { opponent: 'Bahia de Feira', date: '2024-04-05', time: '15:00', location: 'Estadio A', home: false },
      { opponent: 'Salvador FC', date: '2024-04-08', time: '18:30', location: 'Estadio B', home: true },
      { opponent: 'Galicia', date: '2024-04-12', time: '12:00', location: 'Estadio C', home: true }
    ];
  
    // Function to format date
    function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
}
  
    // Function to handle displaying team's next matches
    function displayNextMatches() {
      return nextMatches.map(match => ({
        opponent: match.opponent,
        data: `${formatDate(match.date)} at ${match.time}`,
        location: match.location,
        home: match.home
      }));
    }
  
    // Lifecycle hook to fetch data
    onMount(() => {
      // Here you can fetch actual data from an API
      // or perform any other necessary initialization
    });
  </script>
  
  <!-- Svelte component markup -->
  <div class="w-full sm:w-1/2 xl:w-fit">
    <div class="mb-4">
      <div class="shadow-lg rounded-2xl p-4 bg-white w-full">
        <p class="font-bold text-md text-black">Proximos Jogos</p>
        <ul>
          {#each displayNextMatches() as { opponent, data, location, home }}
            <li class="flex items-center my-6 space-x-2">
              <!-- <span class="block relative"> -->
                <!-- You can replace this image with the team's logo -->
                <!-- <img alt="{opponent}" src="/images/team_logo.jpg" class="mx-auto object-cover rounded-full h-10 w-10" /> -->
              <!-- </span> -->
              {#if home}
              <div class="inline-flex flex-shrink-0 items-center justify-center h-10 w-10 text-emerald-600 bg-emerald-100 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
              </div>
              {:else}
              <div class="inline-flex flex-shrink-0 items-center justify-center h-10 w-10 text-red-600 bg-red-100 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
              </div>
              {/if}
              <div class="flex flex-col">
                <span class="text-sm text-gray-900 font-semibold ml-2">{opponent}</span>
                <span class="text-sm text-gray-400 ml-2">{data} - {location}</span>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
  